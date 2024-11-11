"use client"

import { createStripeUrl } from "@/actions/get-user-subscription";
import { refillHearts } from "@/actions/get-userProgress";
import { Button } from "@/components/ui/button";
import { POINTS_TO_REFILL } from "@/constants";

import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plans } from "../../payments/card";



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
  <div className="w-full h-full flex flex-col justify-between items-center">

    <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-center">Select your Plan</CardTitle>
            <CardDescription>
              
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <Plans/>
              
          </CardContent>
          <CardFooter>
          <Button
       onClick={onUpgrade}
       disabled={pending}>
        {hasActiveSubscription ? "settings" : "upgrade"}
       </Button>
            
          </CardFooter>
        </Card>
        <div className="flex items-center w-full p-4 gap-x-4 border-t-2 border-muted">
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
         
          <p>
            {POINTS_TO_REFILL}
          </p>
        </div>
       )}
      </Button>
    </div>
  </div>
 )
}