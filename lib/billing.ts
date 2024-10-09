import Stripe from 'stripe';

import { db } from './db';
import { randomUUID } from 'crypto';
import { useSession } from 'next-auth/react';
import { auth } from '@/auth';


//price_1NarR3APMZcBliJSoefCKTi5

export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
    apiVersion: '2024-04-10',
});

export async function hasSubscription() {
    const session = await auth()

    if (session) {
        const user = await db.user.findFirst({ where: { email: session.user.email } });

        const subscriptions = await stripe.subscriptions.list({
            customer: String(user?.id)
        })

        return subscriptions.data.length > 0;
    }

    return false;
}

export async function createCheckoutLink(customer: string) {
    const checkout = await stripe.checkout.sessions.create({
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?success=true`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?success=true`,
        customer: customer,
        line_items: [
            {
                price: 'price_1NarR3APMZcBliJSoefCKTi5'
            }
        ],
        mode: "subscription"
    })

    return checkout.url;
}

export async function createCustomerIfNull() {
    const session = await auth();

    if (session) {
        const user = await db.user.findFirst({ where: { email: session.user?.email } });

        if (!user?.id) {
            await db.user.update({
                where: {
                    id: user?.stripe_customer_id as string
                },
                data: {
                    api_key: "secret_" + randomUUID()
                }
            })
        }
        if (!user?.stripe_customer_id) {
            const customer = await stripe.customers.create({
                email: String(user?.email)
            })

            await db.user.update({
                where: {
                    id: user?.id
                },
                data: {
                    stripe_customer_id: customer.id
                }
            })
        }
        const user2 = await db.user.findFirst({ where: { email: session.user?.email } });
        return user2?.stripe_customer_id;
    }

}