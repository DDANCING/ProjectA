"use client";

import { createStripeUrl } from "@/actions/get-user-subscription";
import { refillHearts, refillMusicHearts } from "@/actions/get-userProgress";
import { Button } from "@/components/ui/button";
import { POINTS_TO_REFILL } from "@/constants";

import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plans } from "../../payments/card";

type Props = {
  activitieHearts: number;
  activitiePoints: number;
  musicHearts: number;
  musicPoints: number;
  hasActiveSubscription: boolean;
};

export const Items = ({
  hasActiveSubscription,
  activitieHearts,
  activitiePoints,
  musicHearts,
  musicPoints,
}: Props) => {
  const [pending, startTransition] = useTransition();

  const onRefillActivitieHearts = () => {

    if (pending || activitieHearts === 5 || activitiePoints < POINTS_TO_REFILL) {
      return;
    }
    startTransition(() => {
      refillHearts()
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const onRefillMusicHearts = () => {
    if (pending || musicHearts === 5 || musicPoints < POINTS_TO_REFILL) {
      return;
    }
    startTransition(() => {
      refillMusicHearts()
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const onUpgrade = (isAnnual: boolean) => {
    startTransition(() => {
      createStripeUrl(isAnnual)
        .then((response) => {
          if (response.data) {
            window.location.href = response.data;
          }
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle className="text-center">Select your Plan</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Plans onClick={onUpgrade} disabled={pending} hasActiveSubscription={hasActiveSubscription} />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      { hasActiveSubscription ? (
        null
      ) : (
        <>
        <div className="flex items-center w-full p-4 gap-x-4 border-t-2 border-muted">
          <Image src="/img/icons/heart.svg" alt="heart" width={60} height={60} />
          <div className="flex-1">
            <p className="text-foreground text-base lg:text-xl font-bold">Refill game hearts</p>
          </div>
          
          <Button onClick={onRefillMusicHearts} className="w-52" disabled={pending || musicHearts === 5 || musicPoints < POINTS_TO_REFILL}>
            {musicHearts === 5 ? "full" : (
              <div className="flex items-center">
                <p>{POINTS_TO_REFILL}</p>
              </div>
            )}
          </Button>
        </div>
        <div className="flex items-center w-full p-4 gap-x-4 border-t-2 border-muted">
          <Image src="/img/icons/heart.svg" alt="heart" width={60} height={60} />
          <div className="flex-1">
            <p className="text-foreground text-base lg:text-xl font-bold">Refill activitie hearts</p>
          </div>
          
          <Button onClick={onRefillActivitieHearts} className="w-52" disabled={pending || activitieHearts === 5 || activitiePoints < POINTS_TO_REFILL}>
            {activitieHearts === 5 ? "full" : (
              <div className="flex items-center">
                <p>{POINTS_TO_REFILL}</p>
              </div>
            )}
          </Button>
        </div>
        </>
      )}
    </div>
  );
};
