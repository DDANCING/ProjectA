import { getAnalytics } from "@/actions/get-analytics";
import { Sidebar } from "@/app/(protected)/_components/sidebar/sidebar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { DataCard } from "@/app/(protected)/_components/analytics/data-card";
import { Chart } from "@/app/(protected)/_components/analytics/chart";

const AnalyticsPage = async () => {
  const user = await auth();
  const userId = user?.user.id;

if (!userId) {
  return redirect("/dashboard");
}

const {
  data,
  totalRevenue,
  totalSales,
} = await getAnalytics(userId);

  return ( 
    <main className="p-4 flex gap-4 rounded-sm h-full w-s justify-between bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-background from-primary to-background">
    <div className="hidden md:flex flex-col justify-between gap-4">
      <div className="w-60 flex-1 bg-background/30 backdrop-blur-md">
      <Sidebar/>
      </div>
      <div className="bg-background/30 backdrop-blur-xl h-36 p-2"> 
  </div>
    </div>
    <div className="bg-background/30 backdrop-blur-md flex-1 p-6">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
     <DataCard
      label="Total Revenue"
      value={totalRevenue}
      shouldFormat
      />
      <DataCard
      label="Total Sales"
      value={totalSales}
    
      />
     </div>
     <Chart
     data={data}
     />
    </div>
   
  </main>
   );
}
 
export default AnalyticsPage;