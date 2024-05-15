"use client";

import { useRouter } from "next/navigation";
import { 
  Dialog,
  DialogContent,
  DialogTrigger,
 } from "@/components/ui/dialog";
import { RegisterForm } from "@/components/auth/register-form";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect",
  asChild ?: boolean;
};

export const RegisterButton =  ({
  children,
  mode = "redirect",
  asChild
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/register")
  };

  if (mode === "modal") {
    return(
      <Dialog>
        <DialogTrigger asChild={asChild}>
          {children}
        </DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent">
          <RegisterForm/>
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