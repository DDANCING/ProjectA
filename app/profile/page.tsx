import { getUserPointsAverage } from "@/actions/progress-avarage";
import { auth } from "@/auth";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ELO_TIERS } from "@/constants";
import { CircularProgress } from "@nextui-org/progress";
import { User } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const user = await auth();
  const userId = user?.user.id;

  if (!userId) {
    redirect("/dashboard");
  }

  const userProgressData = await getUserPointsAverage(userId); 

  const getUserRank = () => {
    return ELO_TIERS.find(
      (tier) =>
        userProgressData.points >= tier.minValue &&
        userProgressData.points <= tier.maxValue
    );
  };

  const calculateProgressValue = () => {
    const rank = getUserRank();
    return rank
      ? ((userProgressData.points - rank.minValue) /
          (rank.maxValue - rank.minValue)) *
          100
      : 0;
  };

  return (
    <>

      <div className="w-full lg:px-[30vw]   self-stretch  flex flex-col items-center -mt-4">
      
      <Image
       src="/band.png"
       alt="band"
       height={100}
       width={100}
       className="w-24 h-52 z-10 flex"
       />
       
     <div  className="p-20 flex flex-col-reverse bg-muted self-stretch items-center pb-6 border border-primary 
     mx-3 rounded-2xl -mt-16">
      <div className="bg-muted border-2 border-primary/30 m-2 p-2 rounded-lg flex items-center gap-2">
     <CircularProgress
        value={calculateProgressValue()} // Agora reflete o progresso do usuário
        strokeWidth={3}
        
        classNames={{
          svg: "w-[30px] h-[30px] drop-shadow-md",
          indicator: "stroke-primary",
          track: "stroke-foreground/10",
        }}
      />
      <div className="flex flex-col">
     <h1>{getUserRank()?.tier}</h1>
     <h1 className="text-muted-foreground text-sm -mt-2">{userProgressData.points}</h1>
     </div>
     </div>
    
      <h1 className="font-bold text-2xl m-4">{user.user.name}</h1>
      <div className="flex justify-center">
        
      {user.user.image ? (
         <Avatar className="border-2 border-primary bg-muted-foreground w-[140px] h-[140px] justify-center items-center">
                <AvatarImage
                src={user.user.image || ""} />
                </Avatar>
              ): (
                <Avatar className="border-2 border-primary bg-muted-foreground w-[140px] h-[140px] justify-center items-center">
                <User className="w-20 h-20 text-muted" /> 
              </Avatar>
              )
            }
         
       
      </div>
     
      <Image
        src={getUserRank()?.icon || "/default-rank-icon.png"} // Fallback para rank icon
        alt="Rank Icon"
        width={400 }
        height={400 }

      /> 
       
     </div>
     
     </div>
     

     
  </>
  );
};

export default ProfilePage;
