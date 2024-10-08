"use client";

import { useState, useTransition } from "react";
import { Header } from "./Header";
import { ChallengeType } from "@prisma/client";
import { QuestionBubble } from "./question-bubble";
import { Challenge } from "./challenge";
import { Footer } from "./footer";
import { Card } from "@/components/ui/card";
import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { toast } from "sonner";
import { reduceHearts } from "@/actions/get-userProgress";
import { useAudio } from "react-use";
import AudioChallenge from "./audio-challenge"; // Adicione a importação do AudioChallenge
import { Car, Flag } from "lucide-react";
import Image from "next/image";
import { ResultCard } from "./result-card";
import { useRouter } from "next/navigation";

type Props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: {
    id: number;
    completed: boolean;
    type: string; 
    question: string;  
    challengeOptions: {
      id: number;
      text: string;
      correct: boolean;
    }[];
    correctFrequency?: number | null; 
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
  const router = useRouter();

  const [finishAudio] = useAudio({ src: "/finish.mp3", autoPlay: true});
  const [
    correctAudio,
    _c,
    correctControls,
  ] = useAudio({ src: "/correct.wav" });
  const [
    incorrectAudio,
    _i,
    incorrectControls,
  ] = useAudio({ src: "/incorrect.wav" });
  const [lessonId] = useState(initialLessonId); 
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);
  const [challenges] = useState(initialLessonChallenges);
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed);
    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });

  const [pending, startTransition] = useTransition();
  const [selectedOption, setSelectedOption] = useState<number>();
  const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");

  const challenge = challenges[activeIndex];
  const options = challenge?.challengeOptions ?? [];


  const onNext = () => {
    setActiveIndex((current) => current + 1);
  };

  const onSelect = (id: number) => {
    if (status !== "none") return;
    setSelectedOption(id);
  };

  const onContinue = () => {
    if (challenge.type === "AUDIO") {
     
    } else {
      handleChallengeCompletion();
    }
  };

  const handleChallengeCompletion = () => {
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

    const correctOption = options.find((option) => option.correct);
    if (!correctOption) return;

    if (correctOption.id === selectedOption) {
      startTransition(() => {
        upsertChallengeProgress(challenge.id)
          .then((response) => {
            if (response?.error === "hearts") return;
            correctControls.play();
            setStatus("correct");
            setPercentage((prev) => prev + 100 / challenges.length);
            if (initialPercentage === 100) {
              setHearts((prev) => Math.min(prev + 1, 5));
            }
          })
          .catch(() => toast.error("something went wrong! Please try again."));
      });
    } else {
      startTransition(() => {
        reduceHearts(challenge.id)
          .then((response) => {
            if (response?.error === "hearts") return;
            incorrectControls.play();
            setStatus("wrong");
            setHearts((prev) => Math.max(prev - 1, 0));
          })
          .catch(() => toast.error("Something went wrong. Please try again."));
      });
    }
  };

  const onAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      correctControls.play();
      setStatus("correct");
      onNext();
    } else {
      incorrectControls.play();
      setStatus("wrong");
      setHearts((prev) => Math.max(prev - 1, 0));
    }
  };

  const title = challenge && challenge.type === "ASSIST"
  ? "Select the correct meaning"
  : challenge && challenge.question;

     if (activeIndex >= challenges.length) {
  return (
    <>
    {finishAudio}
    <Card className="flex flex-col w-full h-full justify-between">
    <div className="flex flex-col gap-y-4 lg:gap-y-8 max-w-lg mx-auto text-center pt-7">
    <div className="flex justify-center">
    <Flag  className="text-primary w-[100px] h-[100px] hidden lg:block"/>
    <Flag  className="text-primary w-[50px] h-[50px] block lg:hidden"/>
    </div>
   <h1 className="text-xl lg:text-2xl font-bold">
    Great job! <br /> you&apos;ve complete the lesson.
   </h1>
   <div className="flex items-center gap-x-4 w-full">
     <ResultCard
      variant="points"
      value={challenges.length * 10}
     />
     <ResultCard
      variant="hearts"
      value={hearts}
     />
   </div>
   
    </div>
    <Footer
          lessonsId={lessonId}
          status="completed"
          onCheck={() => router.push("/learn")}
        />
    </Card>
    
    </>
  );
}

  return (
    <>
      {incorrectAudio}
      {correctAudio}
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

            {challenge.type === "AUDIO" && (
             <div>
              <p> {challenge.correctFrequency} </p>
              <AudioChallenge
                question={challenge.question}
                challenge={{
                  correctFrequency: challenge.correctFrequency!,
                  correctNote: challenge.correctFrequency ? `${challenge.correctFrequency}` : "",
                }}
                onAnswer={onAnswer}
              />
              </div>
            )}

            {challenge.type === "ASSIST" && (
              <QuestionBubble question={challenge.question} />
            )}

            <Challenge
              options={options}
              onSelect={onSelect}
              status="none"
              selectedOption={selectedOption}
              disabled={pending}
              type={challenge.type}
            />
          </div>
        </div>

        <Footer
          disabled={pending || !selectedOption}
          status={status}
          onCheck={onContinue}
        />
      </Card>
    </>
  );
};
