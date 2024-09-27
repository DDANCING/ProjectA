"use client";

import { useState } from "react";
import { Header } from "./Header";



type Props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: {
    completed: boolean;
    challengeOptions: {
      id: number;
      text: string;
      correct: boolean;
    }[];
  }[];
  userSubscription: {
    isActive: boolean;
  } | null;
};

export const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonChallenges,
  initialLessonId,
  userSubscription,
}: Props) => {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);
  return (
    <>
      <Header
       hearts={hearts}
       percentage={percentage}
       hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  )
}