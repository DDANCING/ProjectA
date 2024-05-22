"use client"

import { Compass, Guitar, Layout, Sidebar } from "lucide-react";
import { SidebarItem } from "@/app/(protected)/_components/sidebar/sidebar-item";

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
]

export const SidebarRoutes = () => {
  const routes = guestRoutes;

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
 
