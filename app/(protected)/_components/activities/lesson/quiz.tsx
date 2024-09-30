"use client";

import { useState } from "react";
import { Header } from "./Header";
import { ChallengeType } from "@prisma/client";
import { QuestionBubble } from "./question-bubble";
import { Challenge } from "./challenge";



type Props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: {
    completed: boolean;
    type: string; 
    question: string;  
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
  const [challenges] = useState(initialLessonChallenges);
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed);
    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });

  const challenge = challenges[activeIndex];
  const options = challenge.challengeOptions ?? [];

  const title = challenge.type === "ASSIST" 
  ? "Select the correct meaning" 
  : challenge.question;

  return (
    <>
      <Header
       hearts={hearts}
       percentage={percentage}
       hasActiveSubscription={!!userSubscription?.isActive}
      />
      <div className="flex-1">
        <div className="h-full flex items-center justify-center">
          <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
            <h1 className="text-lg lg:text-2xl text-center lg:text-start font-bold text-muted-foreground">
              {title}
            </h1>
            <div>
              {challenge.type === "ASSIST" && (
                <QuestionBubble 
                question={challenge.question}
                />
              )}
              <Challenge
               options={options}
               onSelect={() => {}}
               status="none"
               selectedOption={undefined}
               disabled={false}
               type={challenge.type}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}