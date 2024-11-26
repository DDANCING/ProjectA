import { VscCompassActive } from "react-icons/vsc";
import { ProfileOptions } from "@/app/(protected)/_components/header/user-button";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import PurpleLogo from "@/components/images/Logo";
import { Crown, Heart, LayoutDashboard, Menu, Wallet } from "lucide-react";
import { SiGoogleclassroom } from "react-icons/si";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Sidebar } from "../sidebar/sidebar";
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "@/components/ui/menubar";
import { RoleGate, RoleGateNoMessage } from "@/components/auth/role-gate";
import { UserRole } from "@prisma/client";
import Link from "next/link";

import { GiHeartPlus } from "react-icons/gi";
import { FaGamepad, FaUserCircle } from "react-icons/fa";



export default function Header() {
  return (
<div className="px-6 py-3 flex max-h-16 items-center justify-between bg-background text-muted-foreground border-b border-muted">
           <div className="flex items-center">
           <a aria-label="logo" className="hidden md:flex" href="/dashboard">
            <PurpleLogo/>
            </a>
            <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
               <Menu />
            </SheetTrigger>
           <SheetContent side="left" className="border-none">
            <Sidebar/>
           </SheetContent >
            </Sheet>
           
            </div>
           
            <div className="flex items-center gap-3">

            <Menubar className="border-none text-3xl text-foreground">
      <MenubarMenu>
        <MenubarTrigger> <Crown /> </MenubarTrigger>
        <MenubarContent>
          <Link href={"/game/leaderboard"}>
          <MenubarItem>
            Game Leaderboard 
          </MenubarItem>
          </Link>
          <Link href={"/courses/leaderboard"}>
          <MenubarItem>
          Class Leaderboard 
          </MenubarItem>
          </Link>
          <Link href={"/activities/leaderboard"}>
          <MenubarItem >Activities Leaderboard </MenubarItem>
          </Link>
          <MenubarSeparator />
          <MenubarItem>
            Scoreboard 
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      { /*/<MenubarMenu>
        <MenubarTrigger>  <Heart /> </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Liked Musics
          </MenubarItem>
          <MenubarItem>
            Liked Courses
          </MenubarItem>
          <MenubarItem>
            Liked Activities
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Wishlist</MenubarItem>
        </MenubarContent>
      </MenubarMenu> /*/}
      <MenubarMenu>
        <MenubarTrigger> <Wallet /> </MenubarTrigger>
        <MenubarContent>
          <Link href={"/shop"}>
          <MenubarCheckboxItem>Plans</MenubarCheckboxItem>
          </Link>
         
          <MenubarSeparator />
          <Link href={"/shop"}>
          <MenubarItem inset>
            Buy Hearts <MenubarShortcut><GiHeartPlus/></MenubarShortcut>
          </MenubarItem>
          </Link>
          <Link href={"/courses/purchased"}>
          <MenubarItem inset>
          Courses Purchased
          </MenubarItem>
          </Link>
          <MenubarSeparator />
         
        </MenubarContent>
      </MenubarMenu>
      
      <MenubarMenu>
        <MenubarTrigger><LayoutDashboard /></MenubarTrigger>
        <MenubarContent>
          <Link href={"/dashboard"}>
          <MenubarItem > User dashboard <MenubarShortcut> <FaUserCircle /> </MenubarShortcut>  </MenubarItem> 
          </Link>
          {UserRole.TEACHER && (
  <RoleGateNoMessage allowedRole={UserRole.TEACHER}>
    <Link href="/teacher/courses">
      <MenubarItem>
        Teacher dashboard
        <MenubarShortcut>
          <LiaChalkboardTeacherSolid />
        </MenubarShortcut>
      </MenubarItem>
    </Link>
  </RoleGateNoMessage>
)}
          <Link href={"/game/dashboard"}>
          <MenubarItem > Game <MenubarShortcut> <FaGamepad /> </MenubarShortcut>  </MenubarItem>
          </Link>
          <Link href={"/courses/dashboard"}>
          <MenubarItem > Courses <MenubarShortcut> <SiGoogleclassroom /> </MenubarShortcut> </MenubarItem>
          </Link>
          <Link href={"/activities"}>
          <MenubarItem > Activities <MenubarShortcut> <VscCompassActive /> </MenubarShortcut> </MenubarItem>
          </Link>
          <MenubarSeparator/>
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
            <Link href={"/request/view-bug"}>
              <MenubarItem>View bug</MenubarItem>
              </Link>
              <Link href={"/request/request-features"}>
              <MenubarItem>Request features</MenubarItem>
              </Link>
              <Link href={"/request/request-new-song"}>
              <MenubarItem>Request new songs</MenubarItem>
              </Link>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
            <ProfileOptions/>
            
            </div>
        </div>

  )}