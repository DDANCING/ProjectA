"use client";

import { ExerciseModule } from "@prisma/client";
import { ActivitieCard } from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/get-userProgress";
import { toast } from "sonner";

type Props = {
  activities: ExerciseModule[];
  activeActivitieId?: ExerciseModule["id"];  // Corrigido para pegar o id da atividade ativa
};

export const List = ({ activities, activeActivitieId }: Props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;

    if (id === activeActivitieId) {
      return router.push("/activities/learn");
    }

    startTransition(() => {
      upsertUserProgress(id)  
        .catch(() => toast.error("Something went wrong."));
    });
  
  }
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {activities.map((activitie) => (
        <ActivitieCard
          key={activitie.id}
          id={activitie.id}
          title={activitie.title}
          imageSrc={activitie.imageSrc}
          onClick={onClick}
          disabled={pending}
          active={activitie.id === activeActivitieId}  // Verifica se a atividade é a ativa
        />
      ))}
    </div>
  );
};
