"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Sidebar } from "@/app/(protected)/_components/sidebar/sidebar";
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage
 } from "@/components/ui/form";
import { title } from "process";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";


 const formSchema = z.object({
  title: z.string().min(1, {
    message: "title is required",
  }), 
 });

const CreatePage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
    },
  });

  const { isSubmitting, isValid } = form.formState;
  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/course", values);
      router.push(`/teacher/courses/${response.data.id}`)
    } catch {
      toast("Something went wrong", {
        
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
      })
    }
  }

  return ( 
    <main className="p-4 flex gap-4 rounded-sm h-full w-s justify-between bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-background from-primary to-background">
   
    <div className="bg-background/30 backdrop-blur-md flex-1">
  
     <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
     <div>
      <h1 className="text-2xl">
        Name your course
      </h1>
      <p className="text-sm text-muted-foreground"> what would you like to name your course? Don`t worry, you can change this later.  </p>
      <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mt-8"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Course title
                </FormLabel>
                <FormControl>
                  <Input
                  disabled={isSubmitting}
                  placeholder="Guitar example"
                  {...field}
                  />
                </FormControl>
                <FormDescription>
                  What will you teach in this course?
                </FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />
          <div className="flex items-center gap-x-2">
            <Link href="/teacher/courses">
              <Button type="button" variant="outline">
                 Cancel
              </Button>
              </Link>
            
              <Button
               type="submit" 
               disabled={!isValid || isSubmitting}
               >
                 Continue
              </Button>
              
          </div>
        </form>
      </Form>
     </div>
      </div>
      
    
    </div>
   
  </main>
   );
}
 
export default CreatePage;