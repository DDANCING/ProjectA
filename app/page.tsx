import { LoginButton } from "@/components/auth/login-button";

import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] bg-background from-primary to-background">
     <div className="space-y-4"> 
     <h1 className="text-4xl font-bold text-background drop-shadow-sm text-center">
       ProjectA
       <p className="text-sm">
        
       </p>
     </h1>
     <div>
 

      <LoginButton>
      <Button  className="w-40">
        Sign in
      </Button>
      </LoginButton>
     </div>
     </div>
    </main>
  );
}
 