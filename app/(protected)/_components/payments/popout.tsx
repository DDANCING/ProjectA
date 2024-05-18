import { CardWrapper } from "@/components/auth/card-wrapper"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-sucess"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCurrentUser } from "@/data/hooks/use-current-user"
import Link from "next/link"
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