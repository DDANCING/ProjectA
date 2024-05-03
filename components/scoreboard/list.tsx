"use client"

import { useState, useEffect } from 'react';
import { scoreBoard } from "@/actions/scoreboard"
import { Card, CardContent } from '../ui/card';


interface ScoreboardItem {
  nome: string;
  score: number;
}

interface ScoreboardProps {
  scoreboards: ScoreboardItem[];
}

const Scoreboard: React.FC<ScoreboardProps> = ({ scoreboards }) => {
  return (
    <div>
    <div className="flex flex-wrap gap-2 m-2">
    {scoreboards.map((scoreboard, index) => (
        <div key={index} className="w-60">
          <Card className='bg-background/30 rounded-sm'>
            <CardContent className="flex p-3 justify-between">
              
                  <p>{scoreboard.nome}</p>
                  <p className="text-primary text-opacity-100">{`${scoreboard.score}%`}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  </div>
  );
};

const fetchScoreboards = async () => {
  const scoreboards = await scoreBoard();

  if (typeof scoreboards === 'string') {
    throw new Error('Error fetching scoreboards');
  }

  return scoreboards;
}

const ScoreboardPage: React.FC = () => {
  const [scoreboards, setScoreboards] = useState<ScoreboardItem[]>([]);

  useEffect(() => {
    fetchScoreboards()
      .then(scoreboards => setScoreboards(scoreboards))
      .catch(error => console.error(error));
  }, []);

  return <Scoreboard scoreboards={scoreboards} />;
}

export default ScoreboardPage;