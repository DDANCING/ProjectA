"use client"

import { useCurrentUser } from "@/hooks/use-current-user";



const SettingsPage = () => {

const user =  useCurrentUser();

  return (
    <div className="flex-1 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] bg-background from-primary to-background">
    <div className="flex h-full w-[50%] bg-background border-r border-primary">
    
    
    </div>
    </div>
  )}

export default SettingsPage;