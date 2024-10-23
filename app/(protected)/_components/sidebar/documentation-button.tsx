"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export const DocumentationButton = () => {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-end">
        <Image 
      className="rounded-xl -z-10 opacity-50"
      src="/documentationBg.jpg"
      alt="docBG"
      fill
      />
     <div>
     <h1 className="font-bold ">Need help?</h1>
     <h2 className="text-muted-foreground">Please check our docs</h2>
      </div>
      <div>

      <Link href="/documentation">
      <Button  className="w-full rounded-xl font-bold">DOCUMENTATION</Button>
      </Link>
      </div>
    </div>
  )
}