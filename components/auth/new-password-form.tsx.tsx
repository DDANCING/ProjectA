"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";

import { NewPasswordSchema } from "@/schemas/index";

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
import { newPassword } from "@/actions/new-password";


export const NewPasswordForm = ()  => {
  const  searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [error , setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition(); 

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
     
    },
  });

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
   setError("");
   setSuccess("");

    

    startTransition(() => {
    newPassword(values, token)
     .then((data) => {
      setError(data?.error);
      setSuccess(data?.success);
     })
    });
  };

  return(
    <CardWrapper
    headerLabel="Enter a new password"
    backButtonLabel="Back to login"
    backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form   
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 "
        >
          <div className="space-y-2">
            <FormField 
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-72">
                <FormLabel>New password</FormLabel>
                <FormControl>
                  <Input
                  disabled={isPending}
                  {...field}
                  placeholder="******"
                  type="password"
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
            />
           
          </div>
          <FormError message={error}/>
          <FormSuccess message={success}/>
          <Button 
          disabled={isPending} 
          type="submit"
          className="w-72"
          >  
          Create a new password 
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};