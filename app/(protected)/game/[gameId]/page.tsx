import { auth } from "@/auth";
import { redirect } from "next/navigation"
import CompareAudio from "../../_components/game/audio/audio-recorder";
import { getMusic } from "@/actions/get-musics";
import { getUserSubscription } from "@/actions/get-user-subscription";
import { getGameUserProgress } from "@/actions/get-userProgress";

type Props = {
  params: {
    gameId: number;
  };
};

const GameIdPage = async ({ params }: Props) => {
  const user = await auth();
  
  
  const musicData = await getMusic(params.gameId);
  const userSubscriptionData = getUserSubscription();
  const userProgressData =  getGameUserProgress();

  const [
    music,
    userSubscription,
    userProgress,
  ] = await Promise.all([
    musicData,
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
 
    <CompareAudio
    hearts={userProgress?.hearts}
    userSubscription={userSubscription}
    musicTitle={music.title}
    musicArtist={music.artist}
    youtubeLink={music.youtubeLink}
    recordingDuration={musicDuration}
    targetSongId={music?.targetCompare}
    musicTablature={music?.tabs}
    />
  
  );
};

export default GameIdPage;