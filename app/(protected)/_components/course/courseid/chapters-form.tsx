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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FilePlus2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import { Chapter, Course } from "@prisma/client";
import { ChaptersList } from "@/app/(protected)/_components/course/courseid/chapters-list";

interface ChaptersFormProps {
  initialData: Course & { chapters: Chapter[] };
  courseId: string;
};

const formSchema = z.object({
  title: z.string().min(1),
});

export const ChaptersForm = ({
  initialData,
  courseId
}: ChaptersFormProps) => {
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const toggleCreating = () => {
    setIsCreating((current) => !current);
  }

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
      await axios.post(`/api/courses/${courseId}/chapters`, values);
      toast("Chapter has ben created!", {
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
      });
      toggleCreating();
      router.refresh();
    } catch {
      toast("Something went wrong!", {
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
      });
    }
  };

  const onReorder = async (updateData: { id: string; position: number}[]) => {
    try {
      setIsUpdating(true);

      await axios.put(`/api/courses/${courseId}/chapters/reorder`, {
        list: updateData
      }
  );
  toast.success("Success! Chapters reordered", {
    action: {
      label: "Close",
      onClick: () => console.log("Undo"),
    },
  });
   router.refresh();
    } catch {
      toast.error("Something went wrong", {
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
      });
    } finally {
      setIsUpdating(false);
    }
  }
  const onEdit = (id: string) => {
    router.push(`/teacher/courses/${courseId}/chapters/${id}`);
  }

  return (
    <div className="mt-6 border bg-muted-foreground/20 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Chapters
        <Button onClick={toggleCreating} className="gap-2" variant={"outline"}>
          {isCreating ? (
            <>Cancel</>
          ) : (
            <>
              <FilePlus2 />
              Add a chapter
            </>
          )}
        </Button>
      </div>

      {isCreating && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              disabled={isUpdating}
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Chapter name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={!isValid || isSubmitting}
              type="submit"
            >
              Create
            </Button>
          </form>
        </Form>
      )}
      {!isCreating && (
        <div className={cn(
          "text-sm mt-2",
          !initialData.chapters.length && "text-slate-500 italic"
        )}>
          {!initialData.chapters.length && "No chapters"}
          <ChaptersList
            onEdit={onEdit}
            onReorder={onReorder}
            items={initialData.chapters || []}
          />
        </div>
      )}
      {!isCreating && (
        <p className="text-xs text-muted-foreground ">
          Drag and drop 
          then reorder your chapters
        </p>
      )}
    </div>
  );
};