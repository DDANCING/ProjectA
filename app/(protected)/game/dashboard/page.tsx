import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { CircularProgress } from "@nextui-org/progress";
import { cn } from "@/lib/utils";
import { Rank } from "@/app/(protected)/_components/activities/rank";
import { getMusics, getNewMusics } from "@/actions/get-musics";
import { getProgressMusic, updateUserTotalGameProgressPercentage } from "@/actions/game-progress"; // Importando a função correta
import { MusicList } from "../../_components/game/music/music-list";

const dashboardPage = async () => {
  const user = await auth();
  const userId = user?.user.id;

  if (!userId) {
    return redirect("/");
  }

  // Chama a função de atualização de progresso com o userId
  const updateProgressData = updateUserTotalGameProgressPercentage(userId);
  
  const newMusics = await getNewMusics("");
  const musics = await getMusics(userId);
  const UserPercentageData = getProgressMusic(userId);

  const [
    UserPercentage,
  ] = await Promise.all([
    UserPercentageData,
    updateProgressData,
  ]);
  
  const points = UserPercentage.points || 0;
  const percentage = UserPercentage.totalPercentage || 0;
  const lastPercentage = UserPercentage.totalLastPercentageWin || 0;

  return ( 
    <Card className="p-4 h-[90vh] flex-1 relative top-0 pb-10 overflow-y-auto shadow-none scrollbar-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <Card className="shadow-none border-2 border-muted-foreground h-[40vh] flex-1 relative top-0 pb-10 overflow-y-auto scrollbar-none">
  <div className="sticky top-0 bg-background z-20"> {/* Adicionando z-20 para garantir que o título fique sobreposto */}
    <h1 className="text-2xl font-bold p-2 px-6">Keep going</h1>
    <h2 className="text-sm text-muted-foreground px-6">Continue where you left off</h2>
  </div>
  <div>
    <MusicList items={[...musics]} />
  </div>
</Card>
        </div>
        <div>
          <Card className="shadow-none border-2 border-muted-foreground flex h-full">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold p-2 px-6">Raise your score</h1>
              <h2 className="text-sm text-muted-foreground px-6">Take more courses and raise your score</h2>
            </div>
            <div className="relative flex justify-center items-center ml-auto mx-16">
              <CircularProgress
                classNames={{
                  svg: "w-[24vh] h-[24vh] drop-shadow-md",
                  indicator: "stroke-primary",
                  value: "text-2xl font-semibold text-fore",
                }}
                value={percentage}
                strokeWidth={2}
                showValueLabel={true}
              />
              <div className="absolute flex flex-col items-center justify-center">
                <h1 className="text-xs text-muted-foreground">Accuracy</h1>
                <div className="mb-6"></div>
                <div className="ml-auto mt-2">
                  <h2
                    className={cn(
                      "text-xs",
                      percentage > lastPercentage ? "text-emerald-400" : "text-rose-500"
                    )}
                  >
                    {percentage > lastPercentage ? "+" : ""}{percentage - lastPercentage || 0}%
                  </h2>
                </div>
                <h2 className="text-xs text-muted-foreground">Total Score</h2>
              </div>
            </div>
          </Card>
        </div>
        <div>
        
          <Card className="shadow-none border-2 border-muted-foreground h-[40vh] flex-1 relative top-0 pb-10 overflow-y-auto scrollbar-none">
  <div className="sticky top-0 bg-background z-20"> {/* Adicionando z-20 para garantir que o título fique sobreposto */}
    <h1 className="text-2xl font-bold p-2 px-6">New musics</h1>
    <h2 className="text-sm text-muted-foreground px-6">See new songs</h2>
  </div>
  <div>
    <MusicList items={[...newMusics]} />
  </div>
</Card>
        </div>
        <div>
          <Card className="shadow-none border-2 border-muted-foreground h-[44vh]">
            <Rank link="/game/dashboard" points={points} />
          </Card>
        </div>
      </div>
    </Card>
  );
};

export default dashboardPage;
