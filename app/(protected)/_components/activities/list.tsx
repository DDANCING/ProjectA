"use client";
import { Card } from "@/components/ui/card";
import { ExerciseModule } from "@prisma/client"
import { ActivitieCard } from "./card";

type Props = {
  activities: ExerciseModule[];
  activeActivitieId: number;
};

export const List = ({ activities, activeActivitieId }: Props) => {
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {activities.map((activitie) => (
        <ActivitieCard
        key={activitie.id}
        id={activitie.id}
        title={activitie.title}
        imageSrc={activitie.imageSrc}
        onClick={() => {}}
        disabled={false}
        active={activitie.id === activeActivitieId}
        />
      ))}
    </div>
  )
}