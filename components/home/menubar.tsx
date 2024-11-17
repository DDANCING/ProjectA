"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import PurpleLogo from "../images/Logo"
import { FaGamepad, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa"

export function NavigationMenuHome() {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Go to</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <PurpleLogo />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      ProjectA
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      ProjectA is a platform where you learn while competing with other students.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem className="flex flex-col-reverse" href="/game/dashboard" title="Game">
                <FaGamepad className="mb-2 size-5" />
              </ListItem>
              <ListItem className="flex flex-col-reverse" href="/activities" title="Activities">
                Activities and exercises for your learning.
              </ListItem>
              <ListItem className="flex flex-col-reverse" href="/courses/dashboard" title="Courses">
                Explore our music courses.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Help</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/documentation" title="Documents">
                Help and documentation for ProjectA.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Community</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="https://www.tiktok.com/@projecta.top" title="TikTok">
                <FaTiktok className="mb-2" /> Follow us on TikTok.
              </ListItem>
              <ListItem href="https://www.instagram.com" title="Instagram">
                <FaInstagram className="mb-2" /> Follow us on Instagram.
              </ListItem>
              <ListItem href="https://www.twitter.com" title="Twitter">
                <FaTwitter className="mb-2" /> Follow us on Twitter.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
