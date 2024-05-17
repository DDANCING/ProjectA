"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    
    <Button className="outline-none flex flex-row py-1 border border-muted-foreground rounded-full h-6 w-10" variant="ghost" size="icon" onClick={() => setTheme(theme == "light" ? "dark" : "light" ) }>
    <Sun className="bg-muted-foreground rounded-full text-background p-1 h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"  />
    <Moon className="bg-muted-foreground rounded-full text-background p-1 h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <span className="sr-only">Toggle theme</span>
  </Button>
  )
}
export { useTheme }