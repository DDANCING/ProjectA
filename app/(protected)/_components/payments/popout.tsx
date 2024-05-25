import { CardWrapper } from "@/components/auth/card-wrapper"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCurrentUser } from "@/data/hooks/use-current-user"

import { PaymentMetod } from "./payments-card"


export const PaymentPopout = () => {
 const user = useCurrentUser();
  return (
    <CardWrapper
    headerLabel="ProjectA Checkout"
    backButtonLabel="Select other plan" 
    backButtonHref="/settings"
    
    >
      <Label>
       
        
        <span>email</span>
        <Input
        className="mb-2"
         placeholder={user?.email || ""} 
         > 
        </Input>
       < PaymentMetod/>
      </Label>
      
    </CardWrapper>
  )
}