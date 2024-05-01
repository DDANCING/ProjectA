
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ProfileOptions } from "@/components/header/avatar";
import PurpleLogo from "@/components/images/Logo";


export default function Header() {
  return (
<div className="px-6 py-3 flex items-center justify-between bg-background text-muted-foreground border-b-2 border-primary">
            <PurpleLogo/>
            <div className="flex items-center gap-3">
            <ProfileOptions/>
            <ModeToggle/>
            </div>
        </div>

  )}