import { PrismaClient } from '@prisma/client';
import { UnitBanner } from './unit-banner';
import { LessonButton } from './lesson-button';


const prisma = new PrismaClient();

type Props = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: {
    id: number;
    title: string;
    completed: boolean;
  }[];
  activeLesson?: {
    id: number;
    title: string;
    unit: {
      id: number;
      title: string;
    };
  };
  activeLessonPercentage: number;
};

export const Unit = async ({
  id,
  order,
  title,
  description,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: Props) => {
  const unit = await prisma.unit.findUnique({
    where: { id },
    include: {
      lessons: {
        select: {
          id: true,
          title: true,
          order: true,
        },
      },
    },
  });

  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, index) => {
          const isCurrent =  lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};
