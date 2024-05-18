"use client";

import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader

 } from "@/components/ui/card"
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";


interface CardWrapperProps {
  children?: React.ReactNode;
  headerLabel: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  showSocial?: boolean;
};

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial
}: CardWrapperProps  ) => {
  return(
<Card className="bg-background border-primary shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#7C3AED,0_0_15px_#7C3AED,0_0_30px_#7C3AED]">
  <CardHeader>
    <Header label={headerLabel}/>
  </CardHeader>
  <CardContent >
{children}
</CardContent>
{showSocial && (
<CardFooter>
  <Social />
</CardFooter>  
)}
<CardFooter>
<BackButton
label={backButtonLabel}
href={backButtonHref} 
/>
</CardFooter>  
</Card> 
  ) 
}