"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
Form,
FormControl,
FormDescription,
FormField,
FormItem,
FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { KeyRound, PencilLine } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import { Chapter} from "@prisma/client";
import { Editor } from "@/components/editor";
import { Preview } from "@/components/preview";
import { Checkbox } from "@/components/ui/checkbox";

interface ChapterAccessFormProps {
  initialData: Chapter;
  courseId: string;
  chapterId: string;
}

const formSchema = z.object({
 isFree: z.boolean().default(false),
});

export const ChapterAccessForm = ({
  initialData,
  courseId,
  chapterId
}: ChapterAccessFormProps ) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isFree: !!initialData.isFree
    },
  });

const  { isSubmitting, isValid} = form.formState;

const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {
    await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values);
    toast.success("Access charged", {
        
    action: {
      label: "Close",
      onClick: () => console.log("Undo"),
    },
  })
  toggleEdit();
  router.refresh();
} catch {
  toast.error("something went wrong!", {
        
    action: {
      label: "Close",
      onClick: () => console.log("Undo"),
    },
  })
}
}

  return (
    <div className="mt-6 border bg-muted-foreground/20 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Chapter Access
        <Button onClick={toggleEdit} className="gap-2" variant={"outline"}>
          {isEditing ? (
            <>Cancel</>
          ) : (
       <>
        <KeyRound />
        Charge access
        </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <div className={cn("text-sm mt-2 text-muted-foreground", 
        !initialData.isFree && "text-muted-foreground font-semibold" 
        )}>
        {initialData.isFree ? (
          <>
          This chapter is available for free preview
          </>
        ) : (
          <>
          This chapter is not available for free preview
          </>
        )}
        </div>
      )}
      {isEditing && (  
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
            control={form.control}
            name="isFree"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox 
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormDescription>
                  Select this box to allow free preview access to this chapter.
                  </FormDescription>
                  
                </div>
              </FormItem>
            )}
            />
         <div className="flex items-center gap-x-2">
          <Button 
          disabled={!isValid || isSubmitting}
          type="submit"
          >
            Save
          </Button>
         </div>
          </form>

        </Form>
      )}
    </div>
  )
}