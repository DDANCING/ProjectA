import { Button } from "@/components/ui/button";
import { CircularProgress } from "@nextui-org/progress";
import { ELO_TIERS } from "@/constants"; // Importar os níveis de elo
import Link from "next/link";
import Image from "next/image";

type Props = {
  points: number;
}

export const Rank = ({ points }: Props) => {
  // Função para encontrar o elo com base nos pontos
  const getUserRank = (points: number) => {
    return ELO_TIERS.find((tier) => points >= tier.minValue && points <= tier.maxValue);
  };

  // Pega o rank do usuário
  const userRank = getUserRank(points);

  // Cálculo do progresso dentro do rank atual
  const progressValue = userRank
    ? ((points - userRank.minValue) / (userRank.maxValue - userRank.minValue)) * 100
    : 0;

  return (
    <div className="m-2 border-2 border-muted rounded-xl p-4 space-y-4">
      <div className="flex items-center justify-between w-full space-y-2">
        <h3 className="font-bold text-lg">Leaderboard</h3>
        <Link href="/activities/leaderboard">
          <Button size="sm" variant="default">
            View all
          </Button>
        </Link>
      </div>

      <div className="flex items-center space-x-4">RANK</div>

      <div className="relative flex justify-center items-center">
        <CircularProgress
          classNames={{
            svg: "w-[150px] h-[150px] drop-shadow-md",
            indicator: "stroke-primary",
            track: "stroke-foreground/30",
            value: "text-3xl font-semibold text-white",
          }}
          value={progressValue}
          strokeWidth={3}
        />
        
      
        <div className="absolute flex flex-col items-center justify-center">
        <h1 className="text-xs">{points}</h1>
          <Image
            src={userRank?.icon || "/path/to/default/icon.png"}
            alt="rank"
            height={50}
            width={50}
          />
          <h1 className="text-xs">{userRank?.tier}</h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        
      </div>
    </div>
  );
};
