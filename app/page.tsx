import { Room } from "@/components/3Dcomponents/Room/Model";
import packageJson from '@/package.json';

import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";
import { NavigationMenuHome } from "@/components/home/menubar";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { auth } from "@/auth";
import { ProfileOptions } from "./(protected)/_components/header/user-button";
import Link from "next/link";


const APP_VERSION: string = packageJson.version;
const SceneeRoom = dynamic(() => import('@/components/3Dcomponents/scene-room'), {
  ssr: false
})

export default async function Home() {
  const user = await auth();
  const userId = user?.user.id;
  return (
    <main className="relative flex h-full flex-col items-center justify-between bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-background from-primary to-background">

      <div className="flex w-full justify-around p-4 z-10">
        <div className="absolute inset-0 -z-10">

          <SceneeRoom>
            <Room />
          </SceneeRoom>
        </div>
        <h1 className="text-4xl font-bold drop-shadow-sm text-center">
          ProjectA
        </h1>
        <NavigationMenuHome />
        {!userId ? (
          <LoginButton mode="modal" asChild>
            <Button className="w-40 rounded-full bg-transparent border-primary" variant={"outline"}>
              Sign in
            </Button>
          </LoginButton>
        ) : (
          <div className="w-44">
            <ProfileOptions />
          </div>
        )}

      </div>
      <div className="space-y-4 z-10">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold">
            Music LMS
          </h1>
          <p className="text-white/60"> There is no plan b in education </p>
          {!userId ? (
            <RegisterButton mode="modal" asChild>
              <Button className="w-40 my-5">
                Register
              </Button>
            </RegisterButton>
          ) : (
            <div>
              <Link href={"/dashboard"}>
                <Button className="w-40 my-5">
                  Dashboard
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <footer className="text-end w-full p-1 text-sm text-muted-foreground">
        version {APP_VERSION}
      </footer>
    </main>
  );
}
