import { Button } from "@/components/ui/button";
import { NotepadText } from "lucide-react";
import Link from "next/link";
import { title } from "process";

type Props = {
  title: string;
  description: string;
};

export const UnitBanner = ({title, description}: Props) => {
  return (
    <div className="rounded-xl bg-primary/30 p-5 m-5 flex items-center justify-between">
     <div className="space-y-2.5">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      <Link href="/activities/lesson">
      <Button variant={"ghost"} className="hidden xl:flex border-2 border-b-4 active:border-b-2">
      <NotepadText className="mr-2" />
      Continue
      </Button>
      </Link>
    </div>
  );
};