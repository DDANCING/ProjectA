"use client";

import { useCurrentRole } from "@/data/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import { FormError } from "@/components/form-error";
import { toast } from "sonner";

interface RoleGateProps {
  children?: React.ReactNode;
  allowedRole: UserRole;
};

export const RoleGate = ({
   children,
   allowedRole,
}: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content!"/>
    )
  }

  return (
    <>
    {children}
    </>
  );
};
export const RoleGateNoMessage = ({
  children,
  allowedRole,
}: RoleGateProps) => {
 const role = useCurrentRole();

 if (role !== allowedRole) {
   return (
     <></>
   )
 }

 return (
   <>
   {children}
   </>
 );
};