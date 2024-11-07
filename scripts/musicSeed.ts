import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Criando dados para a tabela Music
  const music1 = await prisma.music.create({
    data: {
      title: 'The Day That Never Comes',
      artist: 'Metallica',
      youtubeLink: 'K6AJuRK2NE4',
      tabs: 'Tab content for Metallica',
      coverAlbum: 'https://i.imgur.com/UntSSrc.jpeg',
      tuning: 'E A D G B E',
      timeMinutes: 8,
      timeSeconds: 25,
    },
  });

  const music2 = await prisma.music.create({
    data: {
      title: 'So Called Life',
      artist: 'Three Days Grace',
      youtubeLink: '7ViIny2YZH0',
      tabs: 'Tab content for Three Days Grace - So Called Life',
      coverAlbum: 'https://i.imgur.com/Ldzop1M.jpeg',
      tuning: 'E A D G B E',
      timeMinutes: 3,
      timeSeconds: 24,
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
