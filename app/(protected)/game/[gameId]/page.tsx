import { auth } from "@/auth";
import { redirect } from "next/navigation"
import { getMusic, getSimilarMusics } from "@/actions/get-musics";
import { getUserSubscription } from "@/actions/get-user-subscription";
import { getGameUserProgress } from "@/actions/get-userProgress";
import { GameComponent } from "../../_components/game/game-component";


type Props = {
  params: {
    gameId: number;
  };
};

const GameIdPage = async ({ params }: Props) => {
  const user = await auth();
  
  if (!params?.gameId) {
    console.error("gameId is undefined");
    return redirect("/game/dashboard");
  }
  const gameId = params.gameId;
  const musicData = await getMusic(gameId);
  const userSubscriptionData = getUserSubscription();
  const userProgressData =  getGameUserProgress();
  const musicRecomendData = getSimilarMusics(gameId);

  
  const [
    music,
    MusicRecomend,
    userSubscription,
    userProgress,
  ] = await Promise.all([
    musicData,
    musicRecomendData,
    userSubscriptionData,
    userProgressData
  ]);

  if (!user?.user.id) {
    return redirect("/game/dashboard");
  }
  if(!music || !userProgress) {
    redirect('/game/dashboard');
   }
  const musicDuration = (music?.timeMinutes * 60) + music.timeSeconds
  return (
 
    <GameComponent
    musicRecomend={[...MusicRecomend]}
    userId={user.user.id}
    gameId={gameId}
    musicProgress={music.userProgress.percentage}
    hearts={userProgress?.hearts}
    userSubscription={userSubscription}
    musicTitle={music.title}
    musicArtist={music.artist}
    youtubeLink={music.youtubeLink}
    recordingDuration={musicDuration}
    targetSongId={music?.targetCompare}
    musicTablature={music.tabs}
    />
  
  );
};

export default GameIdPage;