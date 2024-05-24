"use client"

import { BarChart, Compass, Guitar, Layout, List, Sidebar } from "lucide-react";
import { SidebarItem } from "@/app/(protected)/_components/sidebar/sidebar-item";
import { usePathname } from "next/navigation";

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
  {
    icon: Guitar,
    label: "Game",
    href: "/game"
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
]

export const SidebarRoutes = () => {

  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

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
 
