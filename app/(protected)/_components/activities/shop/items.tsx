"use client"

import { createStripeUrl } from "@/actions/get-user-subscription";
import { refillHearts } from "@/actions/get-userProgress";
import { Button } from "@/components/ui/button";
import { on } from "events";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";

const POINTS_TO_REFILL = 50;

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const Items = ({
  hasActiveSubscription,
  hearts,
  points,
} : Props) => {
 const [pending, startTransition] = useTransition();

 const onRefillHearts = () => {
  if (pending || hearts === 5 || points < POINTS_TO_REFILL) {
    return;
  }
  startTransition(() => {
  refillHearts()
  .catch(() => toast.error("Something went wrong"))

  });
 };

 const onUpgrade = () => {
  startTransition(() => {
    createStripeUrl()
    .then((Response) => {
      if (Response.data) {
        window.location.href = Response.data;
      };
    })
    .catch(() => toast.error("Something went wrong"));
  });
 };

 return(
  <ul className="w-full">
    <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
      <Image
      src="/img/icons/heart.svg"
      alt="heart"
      width={60}
      height={60}
      />
      <div className="flex-1">
        <p className="text-foreground text-base lg:text-xl font-bold">
          Refill hearts
        </p>
      </div>
      <Button onClick={onRefillHearts} className="w-52" disabled={pending || hearts === 5 || points < POINTS_TO_REFILL}>
       {hearts === 5 ? "full" : (
        <div className="flex items-center ">
          <Image
          src="/img/icons/XP.svg"
          alt="points"
          height={20}
          width={20}
          />
          <p>
            {POINTS_TO_REFILL}
          </p>
        </div>
       )}
      </Button>
    </div>
    <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
       <Image 
       src="/img/icons/super.svg"
       alt="super"
       width={60}
       height={60}
       />
       <div className="flex-1">
        <p className="text-foreground text-base lg:text-xl font-bold">
          Unlimited hearts
        </p>
       </div>
       <Button
       onClick={onUpgrade}
       disabled={pending}>
        {hasActiveSubscription ? "settings" : "upgrade"}
       </Button>
    </div>
  </ul>
 )
}