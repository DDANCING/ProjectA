"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Promo = () => {
  return (
    <div className="m-2 border-2 border-muted rounded-xl p-4 space-y-4">
       <div className="space-y-2">
         <div className="flex items-center gap-x-2">
           <Image
           src="/img/icons/super.svg"
           alt="super"
           height={26}
           width={26}
           />
           <h3 className="font-bold text-lg">
            Upgrade to Pro
           </h3>
         </div>
         <p className="text-sm text-muted-foreground">
          get unlimited hearts and more!
         </p>
       </div>
       <Link href="/activities/shop">
       <Button
       className="w-full mt-3"
       size="lg"
       >
        Upgrade today
       </Button>
       </Link>
    </div>
  )
}