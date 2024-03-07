import React, { useEffect, useState } from 'react';

interface User {
  nome: string;
  score: number;
}

const ScoreboardList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Substitua a URL abaixo pela URL correta da sua API
    fetch('http://localhost:3333/api/scoreboards')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data from API:', data);
        setUsers(data);
      })
      .catch((error) => console.error('Erro ao obter a lista de scoreboards:', error));
  }, []);

  return (
    <div >
      <strong className=''>scoreBoard</strong>
      <ul>
        {users && users.map((user, index) => (
          <li key={index}>
            <div className='justify-between flex m-2'>
            <button>{user.nome}  </button>
            <p className='text-primary'>{`${user.score}`}</p> 
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScoreboardList;