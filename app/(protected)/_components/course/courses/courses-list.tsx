import { Card } from "@/components/ui/card";
import { Category, Course } from "@prisma/client";

type CourseWithProgressWhithCategory = Course & {
  category: Category | null;
  chapters: { id: string } [];
  progress: number | null;
};

interface CoursesListProps {
  items: CourseWithProgressWhithCategory[];
}

export const CoursesList = ({
  items
}: CoursesListProps) => {
  return (
   <div className="p-4">
    <div>
     {items.map((item) => (
      <Card key={item.id}>
        {item.title}
      </Card>
     ))}
    </div>
    {items.length === 0 && (
      <div className="text-center text-sm text-muted-foreground mt-10">
        No courses found
      </div>
    )}
   </div>
  )
}

