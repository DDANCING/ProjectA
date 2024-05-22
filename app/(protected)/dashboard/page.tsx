import { Sidebar } from "@/app/(protected)/_components/sidebar/sidebar";

const dashboardPage = () => {
  return ( 
    <main className="p-4 flex gap-4 rounded-sm h-full max-w-full justify-between bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-background from-primary to-background">
    <div className="grid grid-rows-2 gap-4">
      <div className="w-60 bg-background/30 backdrop-blur-md box-content">
       <Sidebar/>
      </div>
      <div className="bg-background/30 backdrop-blur-xl h-36 p-2"> 
  </div>
    </div>
    <div className="bg-background/30 backdrop-blur-md flex-1">
      <div className="h-full w-full flex justify-center items-center">
    

    </div>
    </div>
    
  </main>
  )
}
 
export default dashboardPage;