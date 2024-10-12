import { ActivitiesForm } from "@/app/(protected)/_components/course/courseid/activities-form";
import { CategoryForm } from "@/app/(protected)/_components/course/courseid/category-form";
import { ChaptersForm } from "@/app/(protected)/_components/course/courseid/chapters-form";
import { DescriptionForm } from "@/app/(protected)/_components/course/courseid/description-form";
import { ImageForm } from "@/app/(protected)/_components/course/courseid/image-form";
import { PriceForm } from "@/app/(protected)/_components/course/courseid/price-form";
import { TitleForm } from "@/app/(protected)/_components/course/courseid/title-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/auth";
import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import { BadgeDollarSign, FileMusic, LayoutPanelTop, ListTodo } from "lucide-react";
import { redirect } from "next/navigation";
import UrlTabs from "@/app/(protected)/_components/course/courseid/urltabs";  // Import the new UrlTabs component
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Banner } from "@/components/banner";
import { Actions } from "@/app/(protected)/_components/course/courseid/actions";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const user = await auth();
  const userId = user?.user.id

  if (!userId) {
    return redirect("/courses/dashboard");
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
      userId,
    },
    include: {
      chapters: {
        orderBy: {
          position: "asc",
        },
      },
      activities: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  if (!course) {
    console.log("Course not found, redirecting...");
    return redirect("/courses/dashboard");
  }

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
    course.chapters.some(chapter => chapter.isPublished),
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
  <>
  {!course.isPublished && (
    <Banner
    label="The course has not been published and is not visible to students."
    
    />
  )}
  <main className="p-4 flex gap-4 rounded-sm h-full  justify-between ">
      
      <Card className="overflow-y-auto h-[87vh]  p-6 backdrop-blur-md flex-1">
      
      <div className="flex flex-row  justify-between">
        <div className="flex flex-col gap-y-2 pb-4">
          <h1 className="text-3xl font-medium">Course setup</h1>
          <span className="text-sm text-muted-foreground">
            Complete fields {completionText}
          </span>
        </div>
        <Actions
            disabled={!isComplete}
            courseId={params.courseId}
            isPublished={course.isPublished}
          />
        </div>
        <UrlTabs defaultValue="chapter">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="chapter">Chapters</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="price">Price</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
          </TabsList>
          <TabsContent value="settings">
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-x-2 mb-4">
                    <IconBadge icon={LayoutPanelTop} />
                    <h2 className="text-xl">Course settings</h2>
                  </div>
                </CardTitle>
                <CardDescription>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex-1 min-w-[300px]">
                  <TitleForm initialData={course} courseId={course.id} />
                  <DescriptionForm initialData={course} courseId={course.id} />
                  <ImageForm initialData={course} courseId={course.id} />
                  <CategoryForm
                    initialData={course}
                    courseId={course.id}
                    options={categories.map((category) => ({
                      label: category.name,
                      value: category.id,
                    }))}
                  />
                </div>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="chapter">
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-x-2 mb-4">
                    <IconBadge icon={ListTodo} />
                    <h2 className="text-xl">Chapters</h2>
                  </div>
                </CardTitle>
                <CardDescription>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex-1 min-w-[300px]">
                  <ChaptersForm
                    initialData={course}
                    courseId={course.id}
                  />
                </div>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="price">
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle>
                  <div className="flex-1 min-w-[300px]">
                    <div className="flex items-center gap-x-2 mb-4">
                      <IconBadge icon={BadgeDollarSign} />
                      <h2 className="text-xl">Sell your course</h2>
                    </div>
                  </div>
                </CardTitle>
                <CardDescription>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <PriceForm initialData={course} courseId={course.id} />
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="activities">
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-x-2 mb-4 mt-4">
                    <IconBadge icon={FileMusic} />
                    <h2 className="text-xl">Resources and Activities</h2>
                  </div>
                </CardTitle>
                <CardDescription>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ActivitiesForm initialData={course} courseId={course.id} />
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </TabsContent>
        </UrlTabs>
      </Card>
    </main>
    </>
  );
};

export default CourseIdPage;
