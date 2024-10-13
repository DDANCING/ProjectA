/*
  Warnings:

  - You are about to drop the column `lastPointWins` on the `ProgressCourseModule` table. All the data in the column will be lost.
  - You are about to drop the column `progressStatus` on the `ProgressCourseModule` table. All the data in the column will be lost.
  - You are about to drop the column `progressStatus` on the `ProgressGameMusic` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProgressCourseModule" DROP COLUMN "lastPointWins",
DROP COLUMN "progressStatus",
ADD COLUMN     "lastPercentageWin" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "ProgressGameMusic" DROP COLUMN "progressStatus",
ADD COLUMN     "lastPercentageWin" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "percentage" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "UserProgressExerciseModule" ADD COLUMN     "lastPercentageWin" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "percentage" INTEGER NOT NULL DEFAULT 0;
