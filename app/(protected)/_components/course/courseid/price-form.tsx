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
import { Course } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/format";

interface PriceFormProps {
  initialData: Course;
  courseId: string;
}

const formSchema = z.object({
 price: z.coerce.number(),
});

export const PriceForm = ({
  initialData,
  courseId
}: PriceFormProps ) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: initialData?.price || undefined,
    }
  });

const  { isSubmitting, isValid} = form.formState;

const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {
    await axios.patch(`/api/courses/${courseId}`, values);
  toast("Saved!", {
        
    action: {
      label: "Close",
      onClick: () => console.log("Undo"),
    },
  })
  toggleEdit();
  router.refresh();
} catch {
  toast("something went wrong!", {
        
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
        Price
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
        <p className={cn("text-sm mt-2", !initialData.price && "text-muted-foreground font-semibold" )}>
      {initialData.price ? formatPrice(initialData.price)
      : "No price"  
    }
        </p>
      )}
      {isEditing && (  
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                  type="number"
                  step="0.01"
                  disabled={isSubmitting}
                  placeholder="Your course Price"
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