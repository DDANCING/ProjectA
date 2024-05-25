"use client";

import { useRouter } from "next/navigation";
import { 
  Dialog,
  DialogContent,
  DialogTrigger,
 } from "@/components/ui/dialog";
import { PaymentPopout } from "./popout";

interface PaymentsButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect",
  asChild ?: boolean;
};

export const PaymentButton =  ({
  children,
  mode = "redirect",
  asChild
}: PaymentsButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/payments")
  };

  if (mode === "modal") {
    return(
      <Dialog>
        <DialogTrigger asChild={asChild}>
          {children}
        </DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent">
          <PaymentPopout/>
        </DialogContent>
      </Dialog>
    )
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
  
}