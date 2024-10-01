"use client";

import { useState } from "react";
import { Header } from "./Header";
import { ChallengeType } from "@prisma/client";
import { QuestionBubble } from "./question-bubble";
import { Challenge } from "./challenge";
import { Footer } from "./footer";
import { Card } from "@/components/ui/card";



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

  const [selectedOption, setSelectedOption] = useState<number>();
  const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");

  const challenge = challenges[activeIndex];
  const options = challenge.challengeOptions ?? [];

  const onNext = () => {
    setActiveIndex((current) => current + 1);
  };

  const onSelect = (id: number) => {
    if (status !== "none") return;

    setSelectedOption(id);
  };

  const onContinue =  () => {
    if (!selectedOption) return;

    if (status === "wrong") {
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }
    if (status === "correct") {
      onNext();
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }
    
    const correctOption = options.find((option)  => option.correct);

    if (!correctOption) {
      return;
    }

    if (correctOption.id === selectedOption) {
      console.log("correct option!");

    } else {
      console.log("wrong option!");
    }
  };

  const title = challenge.type === "ASSIST" 
  ? "Select the correct meaning" 
  : challenge.question;

  return (
    <>
     <Card className="h-full flex flex-col">
      <Header
       hearts={hearts}
       percentage={percentage}
       hasActiveSubscription={!!userSubscription?.isActive}
      />
      
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
               onSelect={onSelect}
               status="none"
               selectedOption={selectedOption}
               disabled={false}
               type={challenge.type}
              />
            </div>
          </div>
        </div>
      
     <div>
       <Footer
        disabled={!selectedOption}
        status={status}
        onCheck={onContinue}
        
      />
      </div>
      </Card>
    </>
  )
}