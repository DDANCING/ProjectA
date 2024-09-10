import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";

const dashboardPage = async () => {
  const user = await auth();
  const userId = user?.user.id;


  if (!userId) {
    return redirect("/");
  }


  return ( 
   
   
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <Card className="hidden lg:block w-[368px] stick self-end bottom-6">
        <div className="min-h-[calc(94vh-48px)] sticky top-6 flex flex-col gap-y-4">
           road
        </div>
      </Card>
      <Card className="flex-1 relative top-0 pb-10">
          <div className="h-[200px] w-full bg-primary"/>
          <div className="h-[200px] w-full bg-primary"/>
          <div className="h-[200px] w-full bg-primary"/>
          <div className="h-[200px] w-full bg-primary"/>
          <div className="h-[200px] w-full bg-primary"/>
          <div className="h-[200px] w-full bg-primary"/>
          <div className="h-[200px] w-full bg-primary"/>
          <div className="h-[200px] w-full bg-primary"/>
      </Card>
    </div>

  )
}
 
export default dashboardPage;