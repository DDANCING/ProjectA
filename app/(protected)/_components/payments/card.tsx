"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowBigRightIcon, Dot } from "lucide-react";

type PropsPlans = {
  onClick: (isAnnual: boolean) => void;
  disabled: boolean;
  hasActiveSubscription: boolean;
};

export function Plans({ disabled, hasActiveSubscription, onClick }: PropsPlans) {
  return (
    <Tabs defaultValue="Monthly" className=" mx-auto">
      <TabsList className="grid w-full grid-cols-2 mb-4">
        <TabsTrigger value="Monthly" className="font-bold">Monthly</TabsTrigger>
        <TabsTrigger value="Annually" className="font-bold">Annually</TabsTrigger>
      </TabsList>

      <TabsContent value="Monthly" className="flex gap-4 w-full">
        <Card className="w-[50%] p-4 shadow-md bg-muted rounded-lg">
          <CardContent className="space-y-3 text-center">
            <h1 className="font-extrabold text-3xl text-muted-foreground">FREE</h1>
            <p className="text-xl text-gray-500">US$0/mo</p>
            <p className="flex justify-center items-center text-sm"><Dot className="mr-2" /> Limited Use</p>
            <p className="flex justify-center items-center text-sm"><Dot className="mr-2" /> 5 lives a day</p>
            <p className="flex justify-center items-center text-sm"><Dot className="mr-2" /> Limited Accessibility</p>
          </CardContent>
          <CardFooter className="text-center">
            <Button variant="outline" className="w-full">Get Started</Button>
          </CardFooter>
        </Card>

        <Card className="flex-1 p-4 shadow-lg bg-muted rounded-lg border border-blue-500">
          <CardContent className="space-y-3 text-center">
            <h1 className="font-extrabold text-3xl text-blue-800">PRO</h1>
            <p className="text-xl text-blue-600">US$ 5,00/mo</p>
            <p className="flex justify-center items-center text-sm"><Dot className="mr-2" /> Unlimited Use</p>
            <p className="flex justify-center items-center text-sm"><Dot className="mr-2" /> Unlimited lives</p>
            <p className="flex justify-center items-center text-sm"><Dot className="mr-2" /> Full Accessibility</p>
          </CardContent>
          <CardFooter className="text-center">
            <Button onClick={() => onClick(false)} disabled={disabled} className="w-full bg-blue-600 text-white hover:bg-blue-700">
              {hasActiveSubscription ? "Settings" : "Get PRO"}
              <ArrowBigRightIcon className="ml-2" />
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="Annually" className="flex gap-4 w-full">
        <Card className="w-[50%] p-4 shadow-md bg-muted rounded-lg">
          <CardContent className="space-y-3 text-center">
            <h1 className="font-extrabold text-3xl text-muted-foreground">FREE</h1>
            <p className="text-xl text-gray-500">US$0/mo</p>
            <p className="flex justify-center items-center text-sm"><Dot className="mr-2" />Limited Use</p>
            <p className="flex justify-center items-center text-sm"><Dot className="mr-2" />5 lives a day</p>
            <p className="flex justify-center items-center text-sm"><Dot className="mr-1" />Limited Accessibility</p>
          </CardContent>
          <CardFooter className="text-center">
            <Button variant="outline" className="w-full">Get Started</Button>
          </CardFooter>
        </Card>

        <Card className="flex-1 p-4 shadow-lg bg-muted rounded-lg border text-primary/60">
          <CardContent className="space-y-3 text-center">
            <h1 className="font-extrabold text-3xl text-primary">PRO</h1>
            <p className="text-xl text-primary/90">US$ 4,00/mo</p>
            <p className="flex justify-center items-center text-sm"><Dot className="mr-2" /> Unlimited Use</p>
            <p className="flex justify-center items-center text-sm"><Dot className="mr-2" /> Unlimited lives</p>
            <p className="flex justify-center items-center text-sm"><Dot className="mr-2" /> Full Accessibility</p>
          </CardContent>
          <CardFooter className="text-center">
            <Button onClick={() => onClick(true)} disabled={disabled} className="w-full bg-primary text-white hover:animate-pulse">
              {hasActiveSubscription ? "Settings" : "Get PRO"}
              <ArrowBigRightIcon className="ml-2" />
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
