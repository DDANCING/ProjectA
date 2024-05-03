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



export const LoginForm = ()  => {
  const searchParams = useSearchParams();
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email alredy in use"
      : "" 
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
    login(values)
     .then((data) => {
      setError(data?.error);
      setSuccess(data?.success);
     })
    });
  };

  return(
    <CardWrapper
    headerLabel="Welcome back"
    backButtonLabel="Dont have an account?"
    backButtonHref="/auth/register"
    showSocial
    >
      <Form {...form}>
        <form   
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 "
        >
          <div className="space-y-2">
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
                <FormMessage/>
              </FormItem>
            )}
            />   
          </div>
          <FormError message={error || urlError}/>
          <FormSuccess message={success}/>
          <Button 
          disabled={isPending} 
          type="submit"
          className="w-72"
          >  
          Login  
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};