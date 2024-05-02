import { signOut } from "@/auth";
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
import { X,  } from "lucide-react";
import { GearIcon } from "@radix-ui/react-icons";



export const ProfileOptions = () => {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger> 
    <Avatar className="w-8 h-8 hover:border hover:border-primary" >
    <AvatarImage src="https://github.com/ddancing.png" />
  <AvatarFallback>
    CN
    </AvatarFallback>
    </Avatar>
    </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>
    My account
      </DropdownMenuLabel>
   <DropdownMenuSeparator />
           <DropdownMenuItem>
          
         <a href="/settings"> Settings </a>
         <DropdownMenuShortcut> <GearIcon/>  </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
            
          <form  action={async () => {
            "use server";
            await signOut();
            }}>
           
            <button type="submit" >
            Log out 
            </button>
          </form>   
          <DropdownMenuShortcut><X size={16}/> </DropdownMenuShortcut>
        </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
}