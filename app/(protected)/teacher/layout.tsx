import Header from "@/app/(protected)/_components/header/header-form";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { RoleGate } from "@/components/auth/role-gate";
import { UserRole } from "@prisma/client";


const TeacherLayout =  async ({ children }: { children: React.ReactNode}) => {
  const session = await auth()

  return(
    <SessionProvider session={session}>
      <RoleGate allowedRole={UserRole.TEACHER} >
    <div className="flex flex-col h-screen bg-secondary">
     
    {children}
      
    </div>
    </RoleGate>
    </SessionProvider>
    
  );
}

export default TeacherLayout