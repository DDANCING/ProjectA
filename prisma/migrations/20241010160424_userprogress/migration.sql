/*
  Warnings:

  - The values [PROUSER] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `exerciseModuleId` on the `UserProgress` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('USER', 'ADMIN', 'TEACHER');
ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "UserRole_old";
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'USER';
COMMIT;

-- DropForeignKey
ALTER TABLE "UserProgress" DROP CONSTRAINT "UserProgress_chapterId_fkey";

-- DropForeignKey
ALTER TABLE "UserProgress" DROP CONSTRAINT "UserProgress_exerciseModuleId_fkey";

-- AlterTable
ALTER TABLE "UserProgress" DROP COLUMN "exerciseModuleId",
ADD COLUMN     "averagePoints" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "exercisePoints" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "gameMusicPoints" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "videoPoints" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "UserProgressMusicModule" (
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL DEFAULT 'User',
    "userImageSrc" TEXT NOT NULL DEFAULT '/mascot.svg',
    "hearts" INTEGER NOT NULL DEFAULT 5,
    "points" INTEGER NOT NULL DEFAULT 0,
    "gameMusicModuleId" INTEGER NOT NULL,
    "activeGameMusicId" INTEGER,
    "musicId" INTEGER NOT NULL,

    CONSTRAINT "UserProgressMusicModule_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "UserProgressCourseMode" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "chapterId" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "exerciseModuleId" INTEGER,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserProgressCourseMode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserProgressCourseMode_chapterId_idx" ON "UserProgressCourseMode"("chapterId");

-- CreateIndex
CREATE UNIQUE INDEX "UserProgressCourseMode_userId_chapterId_key" ON "UserProgressCourseMode"("userId", "chapterId");

-- AddForeignKey
ALTER TABLE "UserProgressMusicModule" ADD CONSTRAINT "UserProgressMusicModule_musicId_fkey" FOREIGN KEY ("musicId") REFERENCES "Music"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProgressCourseMode" ADD CONSTRAINT "UserProgressCourseMode_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProgressCourseMode" ADD CONSTRAINT "UserProgressCourseMode_exerciseModuleId_fkey" FOREIGN KEY ("exerciseModuleId") REFERENCES "ExerciseModule"("id") ON DELETE SET NULL ON UPDATE CASCADE;
