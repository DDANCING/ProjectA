import { db } from "@/lib/db";
import { Sidebar } from "@/app/(protected)/_components/sidebar/sidebar";
import { Categories } from "@/app/(protected)/_components/search/categories";
import { Card } from "@/components/ui/card";
import { SearchImput } from "@/components/ui/search-input";
import { getCourses } from "@/actions/get-courses";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { CoursesList } from "@/app/(protected)/_components/course/courses/courses-list";

interface SeachPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  }
};

const SeachPage = async ({
  searchParams
}: SeachPageProps ) => {
  const user = await auth();

  if (!user?.user.id) {
    return redirect("/dashboard");
  }

  const categories = await db.category.findMany({
    where: {
      courses: {
        some: {},
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCourses({
    userId: user.user.id,
    ...searchParams,
  });

  return (
    
      <div className="flex-1 pr-2">
          <div>
            <SearchImput/>
            <Categories items={categories} />
          </div>
          <Card className="bg-background/30 backdrop-blur-md mt-2 shadow-none">
            <CoursesList
            classname="w-full gap-2 p-4 text-wrap text-center grid sm:grid-cols-2 md:grid-cols-3" 
            items={courses}
            />
            </Card> 
      </div>
      
  );
};

export default SeachPage;
