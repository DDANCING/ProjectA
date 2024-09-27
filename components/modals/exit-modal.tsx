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
import { useExitModal } from "@/data/store/use-exit-modal";

export const ExitModal = () => {
  const router = useRouter();
  const [client, setClient] = useState(false);
  const { isOpen, close } = useExitModal();

  useEffect(() => setClient(true), []);

  if (!client) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
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
            Wait, don`t go!
            </DialogTitle>
            <DialogDescription className="text-center text-base">
            Are you sure you want to exit?
            </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
         <div className="w-full">
         <Button className="w-full" size="lg" onClick={close}>
          Keep learning
         </Button>
         </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}