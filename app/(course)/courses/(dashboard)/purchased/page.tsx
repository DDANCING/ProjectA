import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { CoursesList } from "@/app/(protected)/_components/course/courses/courses-list";
import { auth } from "@/auth";
import { Card } from "@/components/ui/card";
import { redirect } from "next/navigation";



const coursePurchagePage = async () => {
  const user = await auth();
  const userId = user?.user.id;

  if (!userId) {
    return redirect("/");
  }

  const {
    completedCourses,
    coursesInProgress,
  } = await getDashboardCourses(userId);



  return ( 
    <Card className="shadow-none overflow-y-auto h-[86vh] flex-1 relative top-0 pb-10 scrollbar-none">
       <CoursesList
       classname=" w-full gap-2 p-4 text-wrap text-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
     items={[ ...coursesInProgress,
      ...completedCourses
      ]}
     />
    </Card>
   );
}
 
export default coursePurchagePage;