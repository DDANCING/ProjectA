"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";

import { LoginSchema } from "@/schemas/index";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { CardWrapper } from "@/components/auth/card-wrapper"
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-sucess";
import { login } from "@/actions/login";
import  Link  from "next/link";



export const LoginForm = ()  => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email alredy in use"
      : "" 
  const [showTwoFactor, setShowTwoFactor] = useState(false);     
  const [error , setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition(); 

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
   setError("");
   setSuccess("");

    startTransition(() => {
    login(values, callbackUrl)
     .then((data) => {
      if (data?.error) {
        form.reset();
        setError(data.error);
      }

      if ( data?.success) {
        form.reset();
        setSuccess(data.success);
      }

      if (data?.twoFactor) {
        setShowTwoFactor(true);
      }
     })
     .catch(() => setError("Something went wrong"));
    });
  };

  return(
    <CardWrapper
    headerLabel="Welcome back"
    backButtonLabel={showTwoFactor ? "" : "Dont have an account?"} 
    backButtonHref="/auth/register"
    showSocial 
    >
      <Form {...form}>
        <form   
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 "
        >
          <div className="space-y-2">
            {showTwoFactor && (
               <FormField 
               control={form.control}
               name="code"
               render={({ field }) => (
                 <FormItem className="w-72">
                   <FormLabel>Two factor code</FormLabel>
                   <FormControl>
                     <Input
                     disabled={isPending}
                     {...field}
                     placeholder="123456"
                     />
                   </FormControl>
                   <FormMessage/>
                 </FormItem>
               )}
               />
            )}
            {!showTwoFactor && (
              <>
            <FormField 
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-72">
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input
                  disabled={isPending}
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
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-72">
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input
                  disabled={isPending}
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
         )} 
          </div>
          <FormError message={error || urlError}/>
          <FormSuccess message={success}/>
          <Button 
          disabled={isPending} 
          type="submit"
          className="w-72"
          >  
          {showTwoFactor ? "Confirm" : "Login"}  
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};