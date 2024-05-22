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
      "flex items-center gap-x-2 text-muted-foreground text-sm font-[500] transition-all hover:text-primary hover:bg-muted/20", isActive && "text-primary hover:bg-muted-20 hover:text-primary"
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
    </button>
   );
}
 
