import Header from "@/app/(protected)/_components/header/header-form";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Sidebar } from "@/app/(protected)/_components/sidebar/sidebar";
import Captador from "./_components/pickup/pickup";
import AfinadorComponente from "./_components/pickup/tunercomponent";


const AuthLayout =  async ({ children }: { children: React.ReactNode}) => {
  const session = await auth()
  return(
    <SessionProvider session={session}>
    <div className="flex flex-col h-screen bg-background">
     
    <Header/>
    <main className="p-4 flex gap-4 rounded-sm h-full w-s justify-between bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-background from-primary to-background">
    <div className="hidden md:flex flex-col justify-between gap-4">
      <div className="w-72 flex-1 bg-background/30 backdrop-blur-md">
      <Sidebar/>
      </div>
      <div className="bg-background/30 backdrop-blur-xl h-36 p-2"> 
  <AfinadorComponente />
  </div>
    </div>
    <div className="w-full " >
    {children}
    
    </div>
   
  </main>
   
      
    </div>
    </SessionProvider>
    
  );
}

export default AuthLayout