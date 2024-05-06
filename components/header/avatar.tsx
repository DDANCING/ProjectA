"use client"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"
import { 
  Avatar,
  AvatarFallback,
  AvatarImage 
  } from "@/components/ui/avatar"
import { User, X,  } from "lucide-react";
import { GearIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "@/components/ui/mode-toggle";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";


  
 

export const ProfileOptions = () => {
  const user = useCurrentUser();
  const onClick = () => {
    logout();
  }
  return (
    <DropdownMenu>
  <DropdownMenuTrigger className="rounded-full"> 
    <Avatar className="w-10 h-10 hover:border-2 hover:border-primary" >
    <AvatarImage src={user?.image}/>
  <AvatarFallback>
  <User  className="hover:text-primary"/>
    </AvatarFallback>
    </Avatar>
    </DropdownMenuTrigger>
  <DropdownMenuContent className="box-content">
    <DropdownMenuLabel>
     {user?.name}
      </DropdownMenuLabel>
   <DropdownMenuSeparator />

           <DropdownMenuItem>
          
         <a href="/settings"> Settings </a>
         <DropdownMenuShortcut> <GearIcon className="text-primary size-6"/>  </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-x-10 ">
            Dark mode
            <DropdownMenuShortcut> <ModeToggle/> </DropdownMenuShortcut>
            </DropdownMenuItem>
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