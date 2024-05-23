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



  
 

export const ProfileOptions = () => {
  const user = useCurrentUser();
  const onClick = () => {
    logout();
  }
  return (
    <DropdownMenu>
  <DropdownMenuTrigger className="rounded-full"> 
    <Avatar className="w-10 h-10 hover:border-2 hover:border-primary" >
    <AvatarImage src={user?.image || ""}/>
    <AvatarFallback>
  <User  className="hover:text-primary"/>
    </AvatarFallback>
    </Avatar>
    </DropdownMenuTrigger>
  <DropdownMenuContent className="box-content mx-6">
    <DropdownMenuLabel>
     {user?.name}
      </DropdownMenuLabel>
   <DropdownMenuSeparator />

           <DropdownMenuItem>
          
         <a href="/settings"> Settings </a>
         <DropdownMenuShortcut> <GearIcon className="text-primary size-6"/>  </DropdownMenuShortcut>
            </DropdownMenuItem>
            
            <RoleGateNoMessage allowedRole={UserRole.ADMIN}>
            <DropdownMenuItem>
          
          <a href="/new-music"> New music </a>
          <DropdownMenuShortcut> <Music className="text-primary size-6"/>  </DropdownMenuShortcut>
             </DropdownMenuItem>
            </RoleGateNoMessage>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
            <button type="submit" onClick={onClick} >
            Log out 
            </button>
          <DropdownMenuShortcut className="text-primary size-6"><X/> </DropdownMenuShortcut>
        </DropdownMenuItem>
       
  </DropdownMenuContent>
</DropdownMenu>

  )
}