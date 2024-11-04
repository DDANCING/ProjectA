import { auth } from "@/auth";
import { redirect } from "next/navigation"
import AudioRecorder from "../../_components/game/audio/audio-recorder";

type Props = {
  params: {
    gameId: number;
  };
};

const GameIdPage = async ({ params }: Props) => {
  const user = await auth();

  // Redireciona para o login se o usuário não estiver autenticado
  if (!user?.user.id) {
    return redirect("/");
  }

  return (
   <div>
    <AudioRecorder/>
   </div>
  );
};

export default GameIdPage;