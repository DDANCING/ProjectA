
import { ProfileOptions } from "@/app/(protected)/_components/header/user-button";
import PurpleLogo from "@/components/images/Logo";



export default function Header() {
  return (
<div className="px-6 py-3 flex items-center justify-between bg-background text-muted-foreground border-b border-primary">
           <a href="/game">
            <PurpleLogo/>
            </a>
            <div className="flex items-center gap-3">
            <ProfileOptions/>
            
            </div>
        </div>

  )}