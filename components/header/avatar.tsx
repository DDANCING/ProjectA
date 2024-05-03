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
import { User, X,  } from "lucide-react";
import { GearIcon } from "@radix-ui/react-icons";
import { auth } from "@/auth";
import { ModeToggle } from "@/components/ui/mode-toggle";


  
 

export const ProfileOptions = async () => {
  const user = await auth();
  return (
    <DropdownMenu>
  <DropdownMenuTrigger> 
    <Avatar className="w-10 h-10 hover:border-2 hover:border-primary" >
    <AvatarImage  src={user?.user.image}/>
  <AvatarFallback>
  <User  className="hover:text-primary"/>
    </AvatarFallback>
    </Avatar>
    </DropdownMenuTrigger>
  <DropdownMenuContent className="box-content">
    <DropdownMenuLabel>
     My account
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
            
          <form  action={async () => {
            "use server";
            await signOut();
            }}>
           
            <button type="submit" >
            Log out 
            </button>
          </form>   
          <DropdownMenuShortcut className="text-primary size-6"><X/> </DropdownMenuShortcut>
        </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
}