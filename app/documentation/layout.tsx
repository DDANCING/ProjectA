import Header from "@/app/(protected)/_components/header/header-form";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Sidebar } from "../(protected)/_components/sidebar/sidebar";


const AuthLayout =  async ({ children }: { children: React.ReactNode}) => {
  const session = await auth()
  return(
    <SessionProvider session={session}>
    <div className="flex flex-col h-screen bg-background">
     
    <Header/>
    <main className="p-4 flex gap-4 rounded-sm h-full w-s justify-between bg-background">
   
      
    <div className="w-full " >
    {children}
    
    </div>
   
  </main>
   
      
    </div>
    </SessionProvider>
    
  );
}

export default AuthLayout