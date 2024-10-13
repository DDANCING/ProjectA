-- AlterTable
ALTER TABLE "ProgressCourseModule" ADD COLUMN     "lastPointWins" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "percentage" INTEGER NOT NULL DEFAULT 0;
