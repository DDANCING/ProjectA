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
    <main className=" flex gap-4 rounded-sm h-full w-full justify-between bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-background from-primary to-background">
      <div className="hidden md:flex flex-col justify-between gap-4">
        <div className="w-60 flex-1 bg-background/30 backdrop-blur-md">
          <Sidebar />
        </div>
        <div className="bg-background/30 backdrop-blur-xl h-36 p-2"></div>
      </div>
      <div className="flex-1 pr-2">
          <div>
            <SearchImput/>
            <Categories items={categories} />
          </div>
          <Card className="bg-background/30 backdrop-blur-md mt-2 border-none">
            <CoursesList 
            items={courses}
            />
            </Card> 
      </div>
      
    </main>
  );
};

export default SeachPage;
