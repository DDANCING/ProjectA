import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Criando dados para a tabela Music
  const music1 = await prisma.music.create({
    data: {
      title: 'Bohemian Rhapsody',
      artist: 'Queen',
      youtubeLink: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
      tabs: 'Tab content for Bohemian Rhapsody',
      coverAlbum: 'https://i.imgur.com/ATVpXrg.jpeg',
      tuning: 'E A D G B E',
      timeMinutes: 6,
      timeSeconds: 0,
    },
  });

  const music2 = await prisma.music.create({
    data: {
      title: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      youtubeLink: 'https://www.youtube.com/watch?v=QkF3oxziUI4',
      tabs: 'Tab content for Stairway to Heaven',
      coverAlbum: 'https://i.imgur.com/91JRcMP.jpeg',
      tuning: 'E A D G B E',
      timeMinutes: 8,
      timeSeconds: 2,
    },
  });

  // Verifica se o ProgressGame já existe para o userId
  let progressGame = await prisma.progressGame.findUnique({
    where: { userId: 'cm2f0he440002tysrieaibrd7' },
  });

  // Se não existir, cria um novo
  if (!progressGame) {
    progressGame = await prisma.progressGame.create({
      data: {
        userId: 'cm2f0he440002tysrieaibrd7',
        hearts: 5,
        points: 200,
        totalPercentage: 50,
        totalLastPercentageWin: 30,
      },
    });
  }

  // Criando dados para a tabela ProgressGameMusic vinculados ao ProgressGame
  await prisma.progressGameMusic.create({
    data: {
      userId: progressGame.userId,
      musicId: music1.id,
      percentage: 75,
      lastPercentageWin: 50,
      progressGameId: progressGame.id,
    },
  });

  await prisma.progressGameMusic.create({
    data: {
      userId: progressGame.userId,
      musicId: music2.id,
      percentage: 60,
      lastPercentageWin: 40,
      progressGameId: progressGame.id,
    },
  });

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
