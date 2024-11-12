"use client"


import { User } from "lucide-react";


import { logout } from "@/actions/logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Avatar,
  AvatarFallback,
  AvatarImage 
  } from "@/components/ui/avatar";

import { useCurrentUser } from "@/data/hooks/use-current-user";
import { RoleGateNoMessage } from "@/components/auth/role-gate";
import { UserRole } from "@prisma/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export const ProfileOptions = () => {
  const user = useCurrentUser();
  const onClick = () => {
    logout();
  };
 

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
          <Link href="/shop">
            <Button className="rounded-full">
              Upgrade plan
            </Button>
            </Link>
            </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
}