
import { ProfileOptions } from "@/app/(protected)/_components/header/user-button";

import PurpleLogo from "@/components/images/Logo";
import { Crown, Heart, LayoutDashboard, Menu, Search, TicketPlus, Wallet } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Sidebar } from "../sidebar/sidebar";
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "@/components/ui/menubar";
import { RoleGate } from "@/components/auth/role-gate";
import { UserRole } from "@prisma/client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { GiHeartPlus } from "react-icons/gi";



export default function Header() {
  return (
<div className="px-6 py-3 flex max-h-16 items-center justify-between bg-background text-muted-foreground border-b border-muted">
           <div className="flex items-center">
           <a className="hidden md:flex" href="/dashboard">
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
          <MenubarItem>
            Music Leaderboard 
          </MenubarItem>
          <MenubarItem>
          Class Leaderboard 
          </MenubarItem>
          <MenubarItem >Activities Leaderboard </MenubarItem>
         
          <MenubarSeparator />
          <MenubarItem>
            Scoreboard 
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
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
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger> <Wallet /> </MenubarTrigger>
        <MenubarContent>
          <Link href={"/settings?tab=payments"}>
          <MenubarCheckboxItem>Plans</MenubarCheckboxItem>
          </Link>
         
          <MenubarSeparator />
          <MenubarItem inset>
            Buy Hearts <MenubarShortcut><GiHeartPlus/></MenubarShortcut>
          </MenubarItem>
          <MenubarItem inset>
          Courses Purchased
          </MenubarItem>
          <MenubarSeparator />
         
        </MenubarContent>
      </MenubarMenu>
      <RoleGate allowedRole={UserRole.TEACHER} >
      <MenubarMenu>
        <MenubarTrigger><LayoutDashboard /></MenubarTrigger>
        <MenubarContent>
          <Link href={"/dashboard"}>
          <MenubarItem > User dashboard </MenubarItem>
          </Link>
          <Link href={"/teacher/courses"}>
          <MenubarItem > Teacher dashboard </MenubarItem>
          </Link>
          <MenubarSeparator/>
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>View bug</MenubarItem>
              <MenubarItem>Request features</MenubarItem>
              <MenubarItem>Request new songs</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      </RoleGate>
    </Menubar>
            <ProfileOptions/>
            
            </div>
        </div>

  )}