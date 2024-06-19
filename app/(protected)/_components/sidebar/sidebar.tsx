
import { SidebarRoutes } from "@/app/(protected)/_components/sidebar/sidebar-routes";



export const Sidebar = () => {
  

  return ( 
    
    <div className="h-full flex flex-col ">
       <div >
         <div className="flex flex-col w-full">
           <SidebarRoutes />
         </div>
       </div>
    </div>
    );
}
 
