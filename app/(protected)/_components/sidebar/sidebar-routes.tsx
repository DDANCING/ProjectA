"use client"

import { ArrowBigLeftDash, BarChart, Compass, Crown, Gamepad2, Guitar, Layout, List, Search, Settings, ShoppingBasket, Sidebar, Store, User, Video } from "lucide-react";
import { SidebarItem } from "@/app/(protected)/_components/sidebar/sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Gamepad2,
    label: "Game",
    href: "/game/dashboard"
  },
  {
    icon: Video  ,
    label: "Courses",
    href: "/courses/dashboard"
  },
  {
    icon: Compass,
    label: "Activities",
    href: "/activities"
  },
  {
    icon: Crown,
    label: "Scoreboard",
    href: "/scoreboard"
  },
  {
    icon: Store,
    label: "Shop",
    href: "/shop"
  },
  {
    icon: User,
    label: "Profile",
    href: "/profile"
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings"
  },
];


const courseRoutes = [
  {
    icon: ArrowBigLeftDash,
    label: "Return",
    href: "/dashboard"
  },
  {
    icon: Layout,
    label: "Courses dashboard",
    href: "/courses/dashboard"
  },
  {
    icon: Compass,
    label: "Browse courses",
    href: "/courses/search"
  },
  {
    icon: ShoppingBasket,
    label: "courses purchased",
    href: "/courses/purchased"
  },
  {
    icon: Crown,
    label: "Course leaderboard",
    href: "/courses/leaderboard"
  },
];

const teacherRoutes = [
  {
    icon: ArrowBigLeftDash,
    label: "Return",
    href: "/dashboard"
  },
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
    icon: ArrowBigLeftDash,
    label: "Return",
    href: "/dashboard"
  },
  {
    icon: Layout,
    label: "Game dashboard",
    href: "/game/dashboard"
  },
  {
    icon: Search,
    label: "Browse music",
    href: "/game/search"
  },
  {
    icon: Crown,
    label: "Game leaderboard",
    href: "/game/leaderboard"
  },
];
const activityRoutes = [
  {
    icon: ArrowBigLeftDash,
    label: "Return",
    href: "/dashboard"
  },
  {
    icon: Compass,
    label: "Learn",
    href: "/activities/learn"
  },
  {
    icon: Compass,
    label: "Quests",
    href: "/activities/quests"
  },
  {
    icon: Crown,
    label: "Leaderboard",
    href: "/activities/leaderboard"
  },
];



export const SidebarRoutes = () => {

  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");
  const isGamePage = pathname?.includes("/game");
  const isActivitiesPage = pathname?.includes("/activities");
  const isCoursePage = pathname?.includes("/course");

  let routes;

  if (isTeacherPage) {
    routes = teacherRoutes;
  } else if (isGamePage) {
    routes = gameRoutes;
  } else if (isActivitiesPage) {
    routes = activityRoutes; 
  } else if (isCoursePage) {
    routes = courseRoutes;
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
 
