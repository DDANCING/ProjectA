"use client"

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
};

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (pathname === "/" && href === "/") || 
  pathname === href || 
  pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  }

  return ( 
    <button
    onClick={onClick }
    type="button"
    className={cn(
      "pl-4 flex items-center  text-muted-foreground text-sm font-[500] transition-all hover:text-primary hover:bg-muted/20", isActive && "text-primary hover:bg-muted-20 hover:text-primary pl-8"
    )}
    > 
    <div className="flex items-center gap-x-2 py-4">
       <Icon 
       size={22}
       className={cn("text-muted-foreground",
        isActive && "text-primary"
       )}
       />
       {label}
    </div>
    <div
    className="ml-auto opacity-0 border-2 border-primary h-full transition-all"
    />
    </button>
   );
}
 
