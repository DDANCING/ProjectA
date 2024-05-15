import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";
import { NavigationMenuHome } from "@/components/home/menubar";

import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between bg bg-muted">
   <div className="flex w-full justify-around p-4">
   <h1 className="text-4xl font-bold text-white drop-shadow-sm text-center">
       ProjectA
       
     </h1>
    < NavigationMenuHome />
     <LoginButton mode="modal" asChild>
      <Button  className="w-40 rounded-full bg-transparent border-white " variant={"outline"}>
        Sign in
      </Button>
      </LoginButton>
   
      </div>
     <div className="space-y-4"> 
    
     <div className="text-center">
     <h1 className="text-4xl font-bold">
      Play The Guitar
     </h1>
     <p className="text-white/60">Turn Your Learning Into Competitiveness </p>
     <RegisterButton mode="modal" asChild>
        <Button className="w-40 my-5">
          Register
        </Button>
      </RegisterButton>
     </div>
     </div>
     <footer>
      
     </footer>
    </main>
  );
}
 