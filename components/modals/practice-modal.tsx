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
import { usePracticeModal } from "@/data/store/use-practice-modal";


export const PracticeModal = () => {
  const router = useRouter();
  const [client, setClient] = useState(false);
  const { isOpen, close } = usePracticeModal();

  useEffect(() => setClient(true), []);

  if (!client) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md border-none">
        <DialogHeader>
         <div className="flex items-center w-full justify-center mb-5">
          <Image 
          src="/img/icons/heart.svg"
          alt="Heart"
          width={100}
          height={100}
          />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Practice lesson
            </DialogTitle>
            <DialogDescription className="text-center text-base">
            Use practice lesson to regain hearts and points. You cannot lose hearts or points in practice lesson.
            </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
         <div className="flex flex-col w-full gap-y-4">
         <Button className="w-full" size="lg" 
         onClick={close}>
          I understand
         </Button>
         </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}