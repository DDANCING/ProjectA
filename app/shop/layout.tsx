import Header from "@/app/(protected)/_components/header/header-form";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Sidebar } from "../(protected)/_components/sidebar/sidebar";
import AfinadorComponente from "../(protected)/_components/pickup/tunercomponent";
import { DocumentationButton } from "../(protected)/_components/sidebar/documentation-button";


const AuthLayout =  async ({ children }: { children: React.ReactNode}) => {
  const session = await auth()
  return(
    <SessionProvider session={session}>
    <div className="flex flex-col h-screen bg-background">
     
    <Header/>
    <main className="p-4 flex gap-4 rounded-sm h-full w-s justify-between bg-background">
    <div className="hidden md:flex flex-col justify-between gap-4">
      <div className="w-72 flex-1 bg-background/30 backdrop-blur-md">
      <Sidebar/>
      </div>
      <div className="bg-background/30 backdrop-blur-xl h-44 p-2 m-3"> 
      <DocumentationButton/>
  </div>
      <div className="bg-background/30 backdrop-blur-xl h-48 p-2"> 
      <AfinadorComponente/>
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