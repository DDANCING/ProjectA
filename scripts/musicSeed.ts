import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Criando dados para a tabela Music
  const music1 = await prisma.music.create({
    data: {
      title: 'The Day That Never Comes',
      artist: 'Metallica',
      youtubeLink: 'YinYm4mbpvQ',
      tabs: 'https://utfs.io/f/k0NLSQp2ETZAefhtQ8HWgJ9jd7XZ5syDvlnzH426hfut1QIk',
      coverAlbum: 'https://i.imgur.com/UntSSrc.jpeg',
      tuning: 'E A D G B E',
      timeMinutes: 7,
      timeSeconds: 57,
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
  const music3 = await prisma.music.create({
    data: {
      title: 'Voice of the Soul',
      artist: 'Death',
      youtubeLink: 's2EJ1AqPIPg',
      tabs: 'https://utfs.io/f/k0NLSQp2ETZA9HuKHCTFcPuklzNaIR5qTZCBdx23nh7OsKgJ',
      coverAlbum: 'https://i.imgur.com/4v3MM9h.jpeg',
      tuning: 'D G C F A D',
      timeMinutes: 3,
      timeSeconds: 43,
    },
  });
  const music4 = await prisma.music.create({
    data: {
      title: 'Letting You Go',
      artist: 'Bullet For My Valentine',
      youtubeLink: 'Len0qLhmhL0',
      tabs: 'https://utfs.io/f/k0NLSQp2ETZA9HuKHCTFcPuklzNaIR5qTZCBdx23nh7OsKgJ',
      coverAlbum: 'https://i.imgur.com/1HbicDb.jpeg',
      tuning: 'E A D G B E',
      timeMinutes: 4,
      timeSeconds: 28,
    },
  });
  const music5 = await prisma.music.create({
    data: {
      title: 'Prayer Of The Refugee',
      artist: 'Rise Against',
      youtubeLink: '9-SQGOYOjxs',
      tabs: 'https://utfs.io/f/k0NLSQp2ETZA9HuKHCTFcPuklzNaIR5qTZCBdx23nh7OsKgJ',
      coverAlbum: 'https://i.imgur.com/yUYc1Br.jpeg',
      tuning: 'E A D G B E',
      timeMinutes: 3,
      timeSeconds: 25,
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
