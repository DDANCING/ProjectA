import { CardWrapper } from "@/components/auth/card-wrapper"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-sucess"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"


const PaymentPopout = () => {
  return (
    <CardWrapper
    headerLabel="Welcome back"
    backButtonLabel={} 
    backButtonHref="/auth/register"
    showSocial 
    >
      <Form >
        <form   
        
        className="space-y-2 "
        >
          <div className="space-y-2">
            
               <FormField 
              
               name="code"
               render={({ field }) => (
                 <FormItem className="w-72">
                   <FormLabel>Two factor code</FormLabel>
                   <FormControl>
                     <Input
                   
                     {...field}
                     placeholder="123456"
                     />
                   </FormControl>
                   <FormMessage/>
                 </FormItem>
               )}
               />
            
          
              <>
            <FormField 
           
            name="email"
            render={({ field }) => (
              <FormItem className="w-72">
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input
                  
                  {...field}
                  placeholder="email@example.com"
                  type="email"
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
            />
            <FormField 
           
            name="password"
            render={({ field }) => (
              <FormItem className="w-72">
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input
                  
                  {...field}
                  placeholder="******"
                  type="password"
                  />
                </FormControl>
                <Button 
                size="sm"
                variant="link"
                asChild
                className="px-0 font-normal"
                >
                    <Link href="/auth/reset">
                       Forgot password?
                    </Link>
                  </Button>
                <FormMessage/>
              </FormItem>
            )}
            />
            </>   
          
          </div>
          <FormError />
          <FormSuccess/>
          <Button 
         
          type="submit"
          className="w-72"
          >  
         
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}