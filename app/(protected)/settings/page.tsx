"use client"

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { SettingsSchema } from "@/schemas";
import { useSession } from "next-auth/react";
import { settings } from "@/actions/settings";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useTransition, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCurrentUser } from "@/data/hooks/use-current-user";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Plus } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { SyncLoader } from "react-spinners";
import { toast } from "sonner";




const SettingsPage = () => {
const [error, setError] = useState<string | undefined>(); 
const [success, setSuccess] = useState<string | undefined>();  
const { update } = useSession();  
const [isPending, startTransition] = useTransition();
const user =  useCurrentUser();

const form = useForm<z.infer<typeof SettingsSchema>>({
  resolver: zodResolver(SettingsSchema),
  defaultValues: {
    name: user?.name || undefined,
  }
});

const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
   startTransition(() => {
   settings(values)
   .then((data) => {
    if (data.error) {
      setError(data.error)
      toast(error)
    }

    if (data.success) {
      update();
      setSuccess(data.success);
      toast(success, {
        
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      })
    }
    
   })
   .catch(() => setError("Something went wrong!"));
  });
}

  return (
    <div className="flex-1 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] bg-background from-primary to-background">
    <div className="flex h-full w-[50%] bg-background border-r border-primary">
    <Tabs defaultValue="account" className="w-full m-2">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="gameconfigs">Game Configs</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          
          <Form {...form}>
            <form 
            className="space-y-6" 
            onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="space-y-4" >
              <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
            <FormItem>
              <FormLabel> Name </FormLabel>
              <FormControl>
                <Input
                {...field}
                placeholder={user?.name || ""} 
                disabled={isPending}
                />
              </FormControl>
            </FormItem>
            )}
              />
           </div>
           <Button variant={"outline"} disabled={isPending} type="submit" className="w-[18%]"> 
            {isPending? <SyncLoader size={9} color="#ffffff"/> : "Save"}
           </Button>
            </form>
          </Form>
          
          </CardContent>
          <CardFooter>
           
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you ll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="gameconfigs">
        <Card>
          <CardHeader>
            <CardTitle>Game config</CardTitle>
            <CardDescription>
              
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
           <ModeToggle/>
          </CardContent>
          <CardFooter>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    
    </Tabs>
    
    
    </div>
    </div>
  )}

export default SettingsPage;