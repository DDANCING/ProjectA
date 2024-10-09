import Image from "next/image";
import { redirect } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getUserProgress } from "@/actions/get-userProgress";
import { getUserSubscription } from "@/actions/get-user-subscription";
import { getTopHundredUsers } from "@/actions/get-user";
import { UserProgress } from "../activities/user-progress";

// Certifique-se que 'LeaderboardList' não tenha 'use client' no topo
const LeaderboardList = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();
  const leaderboardData = getTopHundredUsers();

  const [userProgress, userSubscription, leaderboard] = await Promise.all([
    userProgressData,
    userSubscriptionData,
    leaderboardData,
  ]);

  if (!userProgress || !userProgress.activeExercise) {
    redirect("/courses");
  }

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
     
      <div className="w-full flex flex-col items-start">
      
        <h1 className="text-center font-bold text-foreground text-3xl  my-6">
          Leaderboard
        </h1>
        <p className="text-muted-foreground text-center text-lg mb-6">
          See where you stand among other learners in the community.
        </p>
        <Separator className="mb-4 h-0.5 rounded-full" />
        {leaderboard.map((userProgress, index) => (
          <div
            key={userProgress.userId}
            className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-muted/50"
          >
            <p className="font-bold text-foreground mr-4">{index + 1}</p>
            <Avatar className="border bg-green-500 h-12 w-12 ml-3 mr-6">
              <AvatarImage
                className="object-cover"
                src={userProgress.userImageSrc}
              />
            </Avatar>
            <p className="font-bold text-neutral-800 flex-1">
              {userProgress.userName}
            </p>
            <p className="text-muted-foreground">{userProgress.points} XP</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardList;
