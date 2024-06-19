"use client"

import { BarChart, Compass, Guitar, Layout, List, Sidebar } from "lucide-react";
import { SidebarItem } from "@/app/(protected)/_components/sidebar/sidebar-item";
import { usePathname } from "next/navigation";
import { Menubar,
  MenubarCheckboxItem,
   MenubarContent,
     MenubarItem,
      MenubarMenu,
       MenubarRadioGroup,
        MenubarRadioItem,
         MenubarSeparator,
          MenubarShortcut,
           MenubarSub,
            MenubarSubContent,
             MenubarSubTrigger,
              MenubarTrigger
               } from "@/components/ui/menubar";
import Link from "next/link";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard"
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search"
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses"
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics"
  },
];
const gameRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard"
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search"
  },
  {
    icon: Guitar,
    label: "Game",
    href: "/game"
  },
];
const activityRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard"
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search"
  },
  {
    icon: Guitar,
    label: "Game",
    href: "/game"
  },
];



export const SidebarRoutes = () => {

  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");
  const isGamePage = pathname?.includes("/game");
  const isActivitiesPage = pathname?.includes("/activities");

  let routes;

  if (isTeacherPage) {
    routes = teacherRoutes;
  } else if (isGamePage) {
    routes = gameRoutes;
  } else if (isActivitiesPage) {
    routes = activityRoutes; 
  } else {
    routes = guestRoutes;
  }


  return (  

    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
}
 
