import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
  try {
    console.log('Seeding database');

    // Delete existing data in correct order
    await prisma.userProgressExerciseModule.deleteMany();  // Delete UserProgressExerciseModule
    await prisma.challengeOption.deleteMany();  // Delete Challenge Options
    await prisma.challenge.deleteMany();  // Delete Challenges
    await prisma.lesson.deleteMany();  // Delete Lessons
    await prisma.unit.deleteMany();  // Delete Units
    await prisma.exerciseModule.deleteMany();  // Finally, delete ExerciseModules
    await prisma.userSubscription.deleteMany();  // Delete user subscriptions

    // Insert exercise modules (courses)
    await prisma.exerciseModule.createMany({
      data: [
        { title: 'Guitar Basics', imageSrc: '/guitar_basics.svg' },
        { title: 'Intermediate Guitar', imageSrc: '/intermediate_guitar.svg' },
        { title: 'Advanced Guitar Techniques', imageSrc: '/advanced_guitar.svg' },
      ],
    });

    // Insert units
    await prisma.unit.createMany({
      data: [
        { exerciseModuleId: 1, title: 'Unit 1: Basic Chords', description: 'Learn essential chords', order: 1 },
        { exerciseModuleId: 1, title: 'Unit 2: Strumming Patterns', description: 'Develop rhythm and strumming', order: 2 },
        { exerciseModuleId: 2, title: 'Unit 3: Barre Chords', description: 'Master barre chords', order: 3 },
      ],
    });

    // Insert lessons
    await prisma.lesson.createMany({
      data: [
        { unitId: 1, title: 'Major Chords', order: 1 },
        { unitId: 1, title: 'Minor Chords', order: 2 },
        { unitId: 2, title: 'Basic Strumming', order: 1 },
        { unitId: 2, title: 'Syncopated Strumming', order: 2 },
        { unitId: 3, title: 'Barre Chords Basics', order: 1 },
      ],
    });

    // Insert challenges
    await prisma.challenge.createMany({
      data: [
        { lessonId: 1, type: 'SELECT', order: 1, question: 'Which one of these is a C major chord?' },
        { lessonId: 1, type: 'SELECT', order: 2, question: 'Which one of these is an A minor chord?' },
        { lessonId: 2, type: 'SELECT', order: 1, question: 'Which one of these is a basic strumming pattern?' },
        { lessonId: 2, type: 'SELECT', order: 2, question: 'Which one of these is a syncopated strumming pattern?' },
        { lessonId: 3, type: 'SELECT', order: 1, question: 'Which one of these is a barre chord?' },
      ],
    });

    // Insert challenge options
    await prisma.challengeOption.createMany({
      data: [
        // C major challenge options
        { challengeId: 1, correct: true, text: 'C major', audioSrc: '/c_major.mp3'},
        { challengeId: 1, correct: false, text: 'D major', audioSrc: '/d_major.mp3' },
        { challengeId: 1, correct: false, text: 'E minor', audioSrc: '/e_minor.mp3' },

        // A minor challenge options
        { challengeId: 2, correct: true, text: 'A minor' },
        { challengeId: 2, correct: false, text: 'G major' },
        { challengeId: 2, correct: false, text: 'E major' },

        // Basic strumming challenge options
        { challengeId: 3, correct: true, text: 'Down-down-up' },
        { challengeId: 3, correct: false, text: 'Up-down-up' },
        { challengeId: 3, correct: false, text: 'Down-up-up' },

        // Syncopated strumming challenge options
        { challengeId: 4, correct: true, text: 'Down-up-down-up' },
        { challengeId: 4, correct: false, text: 'Down-down-up' },
        { challengeId: 4, correct: false, text: 'Up-down-up' },

        // Barre chord challenge options
        { challengeId: 5, correct: true, text: 'F major (barre chord)' },
        { challengeId: 5, correct: false, text: 'A minor (open chord)' },
        { challengeId: 5, correct: false, text: 'C major (open chord)' },
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
