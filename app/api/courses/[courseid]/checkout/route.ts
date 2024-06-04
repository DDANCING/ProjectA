
import { useUser } from "@/data/hooks/use-current-auth";
import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(
  req: Request,
  { params }: { params: {courseid: string}}
) {
  try {
    const user = await useUser()

    if(!user || !user.userId || !user.user.email) {
      return new NextResponse("Unauthorized", {status: 401});
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseid,
        isPublished: true,
      }
    });

    const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId: user.userId,
          courseId: params.courseid

        }
      }
    });
    
    if (purchase) {
      return new NextResponse("Already purchased", {status: 400})
    }

    if (!course) {
      return new NextResponse("Not found", {status: 404});
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        quantity: 1,
        price_data: {
          currency: "USD",
          product_data: {
            name: course.title,
            description: course.description!,
          },
          unit_amount: Math.round(course.price! * 100),
        }
      }
    ];
      
    let StripeCustomer = await db.stripeCustomer.findUnique({
      where: {
        userId: user.userId
      },
      select: {
        stripeCustomerId: true,
      }
    });

    if(!StripeCustomer){
      const customer = await stripe.customers.create({
        email: user.user.email[0],
      });

      StripeCustomer = await db.stripeCustomer.create({
        data: {
          userId: user.userId,
          stripeCustomerId: customer.id,
        }
      });
    }
    const session = await stripe.checkout.sessions.create({
      customer: StripeCustomer.stripeCustomerId,
      line_items,
      mode: 'payment',
      success_url: `${process.env.API_BASE_URL}/courses/${course.id}?success=1`,
      cancel_url: `${process.env.API_BASE_URL}/courses/${course.id}?canceled=1`,
      metadata: {
        courseId: course.id,
        userid: user.userId,
      }
    });

    return NextResponse.json({ url: session.url });
   

  } catch (error) {
   console.log("[COURSE_ID_CHECKOUT]", error);
   return new NextResponse("Internal Error", {status: 500 })
  }
}