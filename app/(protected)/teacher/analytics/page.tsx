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
    
    <div className="bg-background/30 backdrop-blur-md flex-1 p-6 ">
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

   );
}
 
export default AnalyticsPage;