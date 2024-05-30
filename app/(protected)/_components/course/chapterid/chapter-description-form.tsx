"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
Form,
FormControl,
FormField,
FormItem,
FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { PencilLine } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import { Chapter} from "@prisma/client";
import { Editor } from "@/components/editor";
import { Preview } from "@/components/preview";

interface ChapterDescriptionFormProps {
  initialData: Chapter;
  courseId: string;
  chapterId: string;
}

const formSchema = z.object({
 description: z.string().min(1),
});

export const ChapterDescriptionForm = ({
  initialData,
  courseId,
  chapterId
}: ChapterDescriptionFormProps ) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: initialData?.description || ""
    }
  });

const  { isSubmitting, isValid} = form.formState;

const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {
    await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values);
    toast.success("Chapter Saved!", {
        
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
        Chapter Description
        <Button onClick={toggleEdit} className="gap-2" variant={"outline"}>
          {isEditing ? (
            <>Cancel</>
          ) : (
       <>
        <PencilLine />
        edit
        </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <div className={cn("text-sm mt-2", 
        !initialData.description && "text-muted-foreground font-semibold" 
        )}>
       {!initialData.description && "No description"}
       {initialData.description && (
        <Preview 
        value={initialData.description}
        />
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
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Editor
                  {...field}
                  />
                </FormControl>
                <FormMessage/>
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