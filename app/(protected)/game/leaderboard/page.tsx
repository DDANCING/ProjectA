



import GameLeaderboardList from "@/app/(protected)/_components/scoreboard/game-list";
import { Card } from "@/components/ui/card";



const GameLeaderboardPage = () => {
  return ( 
    <div className=" flex h-full ">
    <div className="flex-1 ">
    <Card className=" shadow-none overflow-y-auto h-[86vh] flex-1 relative top-0 pb-10 scrollbar-none">
       <GameLeaderboardList/>
      </Card>
    </div>
    </div>
   );
}
 
export default GameLeaderboardPage;