import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";
import { NavigationMenuHome } from "@/components/home/menubar";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import('@/components/Guitar/scene'), {
  ssr: false
})

export default function Home() {
  return (
    <main className="relative flex h-full flex-col items-center justify-between bg bg-muted">
     
      <div className="flex w-full justify-around p-4 z-10">
      <div className="absolute inset-0 -z-10">
        <Scene />
      </div>
        <h1 className="text-4xl font-bold text-white drop-shadow-sm text-center">
          ProjectA
        </h1>
        <NavigationMenuHome />
        <LoginButton mode="modal" asChild>
          <Button className="w-40 rounded-full bg-transparent border-white" variant={"outline"}>
            Sign in
          </Button>
        </LoginButton>
      </div>
      <div className="space-y-4 z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
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
      <footer className="z-10">
      </footer>
    </main>
  );
}
