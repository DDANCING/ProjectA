import { Room } from "@/components/3Dcomponents/Room/Model";
import packageJson from '@/package.json';

import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";
import { NavigationMenuHome } from "@/components/home/menubar";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const APP_VERSION: string = packageJson.version;
const SceneeRoom = dynamic(() => import('@/components/3Dcomponents/scene-room'), {
  ssr: false
})
export default function Home() {
  return (
    <main className="relative flex h-full flex-col items-center justify-between bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-background from-primary to-background">
     
      <div className="flex w-full justify-around p-4 z-10">
      <div className="absolute inset-0 -z-10">
         
   <SceneeRoom> 
    <Room/>
   </SceneeRoom>
      </div>
        <h1 className="text-4xl font-bold text- drop-shadow-sm text-center">
          ProjectA
        </h1>
        <NavigationMenuHome />
        <LoginButton mode="modal" asChild>
          <Button className="w-40 rounded-full bg-transparent border-primary" variant={"outline"}>
            Sign in
          </Button>
        </LoginButton>
      </div>
      <div className="space-y-4 z-10">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold">
            Play The Guitar
          </h1>
          <p className="text-white/60">Turn Your Learning Into Competitiveness</p>
          <RegisterButton mode="modal" asChild>
            <Button className="w-40 my-5">
              Register
            </Button>
          </RegisterButton>
        </div>
      </div>
      <footer className="text-end w-full p-1 text-sm text-muted-foreground">
        version {APP_VERSION}
      </footer>
    </main>
  );
}
