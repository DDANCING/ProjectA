"use client"


import { Music, User, X,  } from "lucide-react";
import { GearIcon } from "@radix-ui/react-icons";

import { logout } from "@/actions/logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { 
  Avatar,
  AvatarFallback,
  AvatarImage 
  } from "@/components/ui/avatar";

import { useCurrentUser } from "@/data/hooks/use-current-user";
import { RoleGateNoMessage } from "@/components/auth/role-gate";
import { UserRole } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";


export const ProfileOptions = () => {
  const user = useCurrentUser();
  const onClick = () => {
    logout();
  };
  const pathname = usePathname();
  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter")

  return (
    <DropdownMenu>
  <div className="flex gap-4 ">

  <DropdownMenuTrigger className="rounded-full"> 
 
    <Avatar className="w-10 h-10 hover:border-2 hover:border-primary" >
    <AvatarImage src={user?.image || ""}/>
    <AvatarFallback>
  <User  className="hover:text-primary"/>
    </AvatarFallback>
    </Avatar>
  
 
    </DropdownMenuTrigger>
    </div>
  <DropdownMenuContent className="box-content mx-6">
    <DropdownMenuLabel>
     {user?.name}
      </DropdownMenuLabel>
   <DropdownMenuSeparator />

           <DropdownMenuItem>
          
         <a href="/settings"> Settings </a>
        
            </DropdownMenuItem>
            
            <RoleGateNoMessage allowedRole={UserRole.ADMIN}>
            <DropdownMenuItem>
          
          <a href="/new-music"> New music </a>
          
             </DropdownMenuItem>
            </RoleGateNoMessage>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
            <button type="submit" onClick={onClick} >
            Log out 
            </button>
         
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        
<DropdownMenuItem>
  
        <RoleGateNoMessage allowedRole={UserRole.TEACHER} >

{isPlayerPage || isTeacherPage ? (
  <Link href="/dashboard" className="flex justify-between gap-5">
    <h1>User mode</h1>

</Link>
) : (
<Link href="/teacher/courses" className="flex justify-between gap-5">
<h1>Teacher mode</h1>


</Link>
)}
    </RoleGateNoMessage>

    </DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu>

  )
}