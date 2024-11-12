"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useHeartsModal } from "@/data/store/use-hearts-modal";


export const HeartsModal = () => {
  const router = useRouter();
  const [client, setClient] = useState(false);
  const { isOpen, close } = useHeartsModal();

  useEffect(() => setClient(true), []);

  const onClick = () => {
    close();
    router.push("/shop");
  }

  if (!client) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md border-none">
        <DialogHeader>
         <div className="flex items-center w-full justify-center mb-5">
          <Image 
          src="\img\Nirvana_Face.svg"
          alt="sadFace"
          width={80}
          height={80}
          />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            You ran out of hearts!
            </DialogTitle>
            <DialogDescription className="text-center text-base">
           Get Pro for unlimited hearts, or purchase them in the store. 
            </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
         <div className="flex flex-col w-full gap-y-4">
         <Button className="w-full" size="lg" onClick={onClick}>
         Get unlimited hearts
         </Button>
         <Button variant="ghost" className="w-full text-red-600" size="lg" 
         onClick={close}>
          No thanks
         </Button>
         </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}