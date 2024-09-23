/*
  Warnings:

  - You are about to drop the column `activitieId` on the `Unit` table. All the data in the column will be lost.
  - Added the required column `exerciseModuleId` to the `Unit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_activitieId_fkey";

-- AlterTable
ALTER TABLE "Unit" DROP COLUMN "activitieId",
ADD COLUMN     "exerciseModuleId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_exerciseModuleId_fkey" FOREIGN KEY ("exerciseModuleId") REFERENCES "ExerciseModule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
