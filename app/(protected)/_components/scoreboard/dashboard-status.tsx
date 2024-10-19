"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { title } from "process";




type Props = {
  percentage: number;
  leaderBoardPage: string;
  title: string;
};

export const PercentageBanner = ({percentage, leaderBoardPage, title} : Props) => {
  return (
  <div className="flex justify-between px-6 items-center h-full">
    <div>
      <h1 className="text-lg font-bold text-muted-foreground">{title}</h1>
      <h2 className="text-3xl font-extrabold text-foreground"> {percentage}% </h2>
      </div>
      <Link href={leaderBoardPage}>
      <Button > Leaderboard </Button>
      </Link>
  </div>
 )
}