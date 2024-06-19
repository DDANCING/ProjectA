"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

const CreatePage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/courses", values);
      router.push(`/teacher/courses/${response.data.id}`);
      toast("Course created", {
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
      });
    } catch {
      toast("Something went wrong", {
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
      });
    }
  };

  return (

    
      <div className="flex-1 bg-transparent">
        <div className=" mx-auto flex md:items-center md:justify-center h-full p-6">
          <Card className="p-6 border-primary ">
            <h1 className="text-2xl">Name your course</h1>
            <p className="text-sm text-muted-foreground">
              What would you like to name your course? Don’t worry, you can change this later.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course title</FormLabel>
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center gap-x-2">
                  <Link href="/teacher/courses">
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </Link>
                  <Button type="submit" disabled={!isValid || isSubmitting}>
                    Continue
                  </Button>
                </div>
              </form>
            </Form>
          </Card>
        </div>
      </div>
  );
};

export default CreatePage;