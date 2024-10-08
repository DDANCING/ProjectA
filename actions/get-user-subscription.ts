"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";
import { cache } from "react";

const DAY_IN_MS = 86_400_000; 
export const getUserSubscription = cache(async () => {
  const user = await auth();

  if (!user?.user.id) {
    return null;
  }

  const data = await db.userSubscription.findFirst({
    where: {
      userId: user.user.id,
    },
  });
  if (!data) {
    return null;
  }

  const isActive = 
    data.stripePriceId &&
    data.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();

  return {
    ...data,
    isActive: !!isActive,
  };
});

const returnUrl = absoluteUrl("/activities/shop");

export const createStripeUrl = async () => {
  const user = await auth();

  if (!user?.user.id) {
    throw new Error("Unauthorized");
  }

  const userSubscription = await getUserSubscription();

  if (userSubscription && userSubscription.stripeCustomerId) {
    const stripeSession = await stripe.billingPortal.sessions.create({
      customer: userSubscription.stripeCustomerId,
      return_url: returnUrl,
    });

    return { data: stripeSession.url };
  }

  // Ensure user.user.email is defined
  if (!user.user.email) {
    throw new Error("User email is missing");
  }

  const stripeSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    customer_email: user.user.email,  
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "USD",
          product_data: {
            name: "ProjectA",
            description: "Pro user",
          },
          unit_amount: 500,  // This is in cents, so $5.00
          recurring: {
            interval: "month",
          },
        },
      },
    ],
    mode: "subscription",  // mode should be inside params
    metadata: {
      user_id: user.user.id,
    },
    success_url: returnUrl,
    cancel_url: returnUrl,
  });

  return { data: stripeSession.url };
};
