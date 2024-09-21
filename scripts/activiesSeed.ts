import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
  try {
    console.log('Seeding database');

    // Delete existing data
    await prisma.course.deleteMany();
    await prisma.userProgress.deleteMany();
    await prisma.unit.deleteMany();
    await prisma.lesson.deleteMany();
    await prisma.challenge.deleteMany();
    await prisma.challengeOption.deleteMany();
    await prisma.userSubscription.deleteMany();

    // Insert courses (without specifying IDs)
    await prisma.exerciseModule.createMany({
      data: [
        { title: 'Guitar Basics', imageSrc: '/guitar_basics.svg' },
        { title: 'Intermediate Guitar', imageSrc: '/intermediate_guitar.svg' },
        { title: 'Advanced Guitar Techniques', imageSrc: '/advanced_guitar.svg' },
      ],
    });

    // Insert units (without specifying IDs)
    await prisma.unit.createMany({
      data: [
        { exerciseModuleId: 1, title: 'Unit 1: Basic Chords', description: 'Learn essential chords', order: 1 },
        { exerciseModuleId: 1, title: 'Unit 2: Strumming Patterns', description: 'Develop rhythm and strumming', order: 2 },
      ],
    });

    // Insert lessons (without specifying IDs)
    await prisma.lesson.createMany({
      data: [
        { unitId: 1, title: 'Major Chords', order: 1 },
        { unitId: 1, title: 'Minor Chords', order: 2 },
        { unitId: 2, title: 'Basic Strumming', order: 1 },
        { unitId: 2, title: 'Syncopated Strumming', order: 2 },
      ],
    });

    // Insert challenges (without specifying IDs)
    await prisma.challenge.createMany({
      data: [
        { lessonId: 1, type: 'SELECT', order: 1, question: 'Which one of these is a C major chord?' },
        { lessonId: 1, type: 'ASSIST', order: 2, question: 'Play a C major chord' },
        { lessonId: 2, type: 'SELECT', order: 1, question: 'Which one of these is an A minor chord?' },
      ],
    });

    // Insert challenge options (without specifying IDs)
    await prisma.challengeOption.createMany({
      data: [
        // C major challenge options
        { challengeId: 1, correct: true, text: 'C major', audioSrc: '/c_major.mp3' },
        { challengeId: 1, correct: false, text: 'D major', audioSrc: '/d_major.mp3' },
        { challengeId: 1, correct: false, text: 'E minor', audioSrc: '/e_minor.mp3' },

        // A minor challenge options
        { challengeId: 3, correct: true, text: 'A minor', audioSrc: '/a_minor.mp3' },
        { challengeId: 3, correct: false, text: 'G major', audioSrc: '/g_major.mp3' },
        { challengeId: 3, correct: false, text: 'E major', audioSrc: '/e_major.mp3' },
      ],
    });

    console.log('Seeding finished');
  } catch (error) {
    console.error(error);
    throw new Error('Failed to seed the database');
  } finally {
    await prisma.$disconnect();
  }
};

main();
