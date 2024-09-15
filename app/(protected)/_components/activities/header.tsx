import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
};

export const Header = ({ title }: Props ) => {
  return (
    <div className="sticky top-0 bg-primary/50 pb-3 lg:pt-[28px] flex items-center justify-between border-b-2 border-muted-foreground mb-5 text-muted-foreground lg:z-50">
     <Link href="/courses">
     <Button className="ml-2" variant="ghost" size="sm">
       <ArrowLeft className=" h-5 w-5 stroke-2 text-muted-foreground" />
     </Button>
     </Link>
     <h1 className="font-bold text-sm">
      {title}
     </h1>
     <div/>
    </div>
  )
}