import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface User {
  nome: string;
  score: number;
}

const ScoreboardList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    fetch('http://localhost:3333/api/scoreboards')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error('Erro ao obter a lista de scoreboards:', error));
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-2 m-2">
        {users.map((user, index) => (
          <div key={index} className="w-60">
            <Card>
              <CardContent className="flex p-3 justify-between">
                
                    <p>{user.nome}</p>
                    <p className="text-primary">{`${user.score}%`}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreboardList;
