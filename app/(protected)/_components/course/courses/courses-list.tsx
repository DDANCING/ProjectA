import { Card } from "@/components/ui/card";
import { Category, Course } from "@prisma/client";
import { CourseCard } from "@/app/(protected)/_components/course/courses/course-card";

type CourseWithProgressWhithCategory = Course & {
  category: Category | null;
  chapters: { id: string } [];
  progress: number | null;
};

interface CoursesListProps {
  items: CourseWithProgressWhithCategory[];
  classname: string;
}

export const CoursesList = ({ items, classname }: CoursesListProps) => {
  return (
    <div className={classname}>
      {items.map((item) => (
        <CourseCard 
          key={item.id}
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl!}
          chaptersLength={item.chapters.length}
          price={item.price!}
          progress={item.progress}
          category={item?.category?.name!}
        />
      ))}
      {items.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No courses found
        </div>
      )}
    </div>
  )
}
