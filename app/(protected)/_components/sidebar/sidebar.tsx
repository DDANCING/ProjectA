import { SidebarRoutes } from "@/app/(protected)/_components/sidebar/sidebar-routes";

export const Sidebar = () => {
  return ( 
    <div className="h-full flex flex-col overflow-y-auto ">
       <div className="p-6">
         <div className="flex flex-col w-full">
           <SidebarRoutes />
         </div>
       </div>
    </div>
    );
}
 
