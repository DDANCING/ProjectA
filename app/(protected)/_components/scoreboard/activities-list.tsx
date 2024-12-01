import { redirect } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getActivitiesUserProgress } from "@/actions/get-userProgress";
import { getTopHundredUsers } from "@/actions/get-user";

import { ELO_TIERS } from "@/constants";
import { CircularProgress } from "@nextui-org/progress";
import Image from "next/image";
import { User } from "lucide-react";

const ActivitiesLeaderboardList = async () => {
  const userProgressData = getActivitiesUserProgress();
 
  const leaderboardData = getTopHundredUsers();

  const [userProgress, leaderboard] = await Promise.all([
    userProgressData,
    leaderboardData,
  ]);

  if (!userProgress?.points) {
    return null
  }

  const getUserRank = (points: number) => {
    return ELO_TIERS.find(
      (tier) => points >= tier.minValue && points <= tier.maxValue
    );
  };

  const calculateProgressValue = (points: number) => {
    const rank = getUserRank(points);
    return rank
      ? ((points - rank.minValue) / (rank.maxValue - rank.minValue)) * 100
      : 0;
  };

  const topThreeUsers = leaderboard.slice(0, 3);
  const otherUsers = leaderboard.slice(3);

  // Calcula o progresso para cada um dos top 3 usuários
  const firstUserProgressValue = calculateProgressValue(topThreeUsers[0]?.points);
  const secondUserProgressValue = calculateProgressValue(topThreeUsers[1]?.points);
  const thirdUserProgressValue = calculateProgressValue(topThreeUsers[2]?.points);


  return (
    <div className="flex flex-col items-center gap-[48px] px-6">

    <div className="flex justify-around items-end w-full">
{secondUserProgressValue ? (
  <div className="relative flex flex-col items-center space-y-2">
    <CircularProgress
      value={secondUserProgressValue}
      strokeWidth={2}
      classNames={{
        svg: "w-[140px] h-[140px] drop-shadow-md",
        indicator: "stroke-primary",
        track: "stroke-foreground/10",
      }}
    />
    <div className="absolute top-3">
      <Avatar className="border-2 border-primary bg-primary w-[100px] h-[100px]">
        <AvatarImage src={topThreeUsers[1]?.userImageSrc || ""} />
      </Avatar>
    </div>
    <Image
      src={getUserRank(topThreeUsers[1]?.points)?.icon || ""}
      alt="Rank Icon"
      width={50}
      height={50}
      className="absolute top-[-20px] right-[-20px] "
    />
    <div className="text-xl font-bold text-center">{topThreeUsers[1]?.userName}</div>
    <div className="text-md font-medium">Score {topThreeUsers[1]?.points}</div>
    <div className="text-sm">Rank #2</div>
  </div>
) : (
  <div className="relative flex flex-col items-center space-y-2">
  <div className="w-[130px] h-[130px] bg-gray-200 rounded-full"></div> {/* Placeholder CircularProgress */}
  <div className="absolute top-2">
  <Avatar className="border-2 border-primary bg-primary w-[90px] h-[90px] flex items-center justify-center">
    <User className="w-10 h-10 text-gray-400" /> {/* Ícone de avatar Lucide */}
  </Avatar>
  </div>
  <div className="text-xl font-bold text-center text-gray-400">Unknown</div>
  <div className="text-md font-medium text-gray-400">Score N/A</div>
  <div className="text-sm text-gray-400">Rank #2</div>
</div>
)}


      {/* First Place */}
      <div className="relative flex flex-col items-center space-y-2">
        <CircularProgress
          value={firstUserProgressValue}
          strokeWidth={2}
          classNames={{
            svg: "w-[190px] h-[190px] drop-shadow-md",
            indicator: "stroke-primary",
            track: "stroke-foreground/10",
          }}
        />
        <div className="absolute top-4">
          <Avatar className="border-2 border-primary bg-primary w-[140px] h-[140px]">
            {topThreeUsers[0]?.userImageSrc? (
              <AvatarImage src={topThreeUsers[0]?.userImageSrc || ""} />
            ): (
              <Avatar className="border w-[140px] h-[140px] justify-center items-center">
              <User className="w-20 h-20 text-gray-400" /> 
            </Avatar>
            )
          }
            
          </Avatar>
        </div>
        <Image
          src={getUserRank(topThreeUsers[0]?.points)?.icon || "\img\Nirvana_Face.svg"}
          alt="Rank Icon"
          width={50}
          height={50}
          className="absolute top-[-10px] right-[-15px] "
        />
        <div className="text-xl font-bold text-center">{topThreeUsers[0]?.userName}</div>
        <div className="text-md font-medium">Score {topThreeUsers[0]?.points}</div>
        <div className="text-sm">Rank #1</div>
      </div>

      {secondUserProgressValue ? (
      <div className="relative flex flex-col items-center space-y-2">
        <CircularProgress
          value={thirdUserProgressValue}
          strokeWidth={2}
          classNames={{
            svg: "w-[130px] h-[130px] drop-shadow-md",
            indicator: "stroke-primary",
            track: "stroke-foreground/10",
          }}
        />
        <div className="absolute top-3">
          <Avatar className="border-2 border-primary bg-primary w-[90px] h-[90px]">
            <AvatarImage src={topThreeUsers[2]?.userImageSrc || ""} />
          </Avatar>
        </div>
        <Image
          src={getUserRank(topThreeUsers[2]?.points)?.icon || ""}
          alt="Rank Icon"
          width={30}
          height={30}
          className="absolute top-[-10px] right-[-5px]"
        />
        <div className="text-xl font-bold text-center">{topThreeUsers[2]?.userName}</div>
        <div className="text-md font-medium">Score {topThreeUsers[2]?.points}</div>
        <div className="text-sm">Rank #3</div>
      </div>
    
        ) : (
          <div className="relative flex flex-col items-center space-y-2">
          <div className="w-[120px] h-[120px] bg-gray-200 rounded-full"></div> 
          <div className="absolute top-2">
          <Avatar className="border bg-gray-200 w-[90px] h-[90px] flex items-center justify-center">
             <User className="w-10 h-10 text-gray-400" /> 
          </Avatar>
          </div>
          <div className="text-xl font-bold text-center text-gray-400">Unknown</div>
          <div className="text-md font-medium text-gray-400">Score N/A</div>
          <div className="text-sm text-gray-400">Rank #3</div>
        </div>
    
        )}
   </div>
    <Separator className="mb-4 h-0.5 rounded-full" />
    <div className="w-full">
      {otherUsers.map((user, index) => (
        <div
          key={user.userId}
          className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-muted/50"
        >
          <p className="font-bold text-foreground mr-4">{index + 4}</p>
          <Avatar className="border bg-green-500 h-12 w-12 ml-3 mr-6">
            <AvatarImage className="object-cover" src={user.userImageSrc} />
          </Avatar>
          <p className="font-bold text-neutral-800 flex-1">{user.userName}</p>
          <p className="text-muted-foreground">{user.points} XP</p>
        </div>
      ))}
    </div>
  </div>
);
};

export default ActivitiesLeaderboardList;