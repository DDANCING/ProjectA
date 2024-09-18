/*
  Warnings:

  - You are about to drop the column `activeActivitieId` on the `UserProgressExerciseModule` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserProgressExerciseModule" DROP COLUMN "activeActivitieId",
ADD COLUMN     "activeExerciseId" INTEGER;
