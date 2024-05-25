
import { ProfileOptions } from "@/app/(protected)/_components/header/user-button";

import PurpleLogo from "@/components/images/Logo";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Sidebar } from "../sidebar/sidebar";



export default function Header() {
  return (
<div className="px-6 py-3 flex max-h-16 items-center justify-between bg-background text-muted-foreground border-b border-muted">
           
           <a className="hidden md:flex" href="/game">
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
            <div className="flex items-center gap-3">
            <ProfileOptions/>
            
            </div>
        </div>

  )}