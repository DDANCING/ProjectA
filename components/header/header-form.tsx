import { ModeToggle } from "@/components/ui/mode-toggle"


export default function Header() {
  return (
<div className="px-6 py-3 flex items-center justify-between border-b border-primary bg-background text-muted-foreground">
            <h1 className="text-xl font-bold"></h1>
            <div className="flex items-center gap-3">
                

            <ModeToggle/>

            </div>
        </div>

  )}