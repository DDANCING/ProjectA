-- AlterTable
ALTER TABLE "user_overall_progress" ADD COLUMN     "averagePercentage" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "exercisePercentage" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "gameMusicPercentage" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "videoPercentage" INTEGER NOT NULL DEFAULT 0;
