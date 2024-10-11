-- CreateTable
CREATE TABLE "ProgressGameMusic" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "gameMusicModuleId" INTEGER NOT NULL,
    "musicId" INTEGER NOT NULL,
    "hearts" INTEGER NOT NULL DEFAULT 5,
    "points" INTEGER NOT NULL DEFAULT 0,
    "progressStatus" TEXT NOT NULL DEFAULT 'in_progress',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProgressGameMusic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgressCourseModule" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "chapterId" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "points" INTEGER NOT NULL DEFAULT 0,
    "progressStatus" TEXT NOT NULL DEFAULT 'in_progress',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProgressCourseModule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_overall_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "exercisePoints" INTEGER NOT NULL DEFAULT 0,
    "videoPoints" INTEGER NOT NULL DEFAULT 0,
    "gameMusicPoints" INTEGER NOT NULL DEFAULT 0,
    "averagePoints" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_overall_progress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_overall_progress_userId_key" ON "user_overall_progress"("userId");

-- AddForeignKey
ALTER TABLE "user_overall_progress" ADD CONSTRAINT "user_overall_progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
