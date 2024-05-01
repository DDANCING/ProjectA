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
      My Account
      </DropdownMenuLabel>
    <DropdownMenuSeparator />
            <DropdownMenuItem>
          <DropdownMenuShortcut>
            
          <form  action={async () => {
            "use server";
            await signOut();
            }}>
          
            <button type="submit" >
               Log out
            </button>
          </form>   
          </DropdownMenuShortcut>
        </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
}