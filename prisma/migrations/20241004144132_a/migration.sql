/*
  Warnings:

  - The primary key for the `UserProgressExerciseModule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Performace` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Performace" DROP CONSTRAINT "Performace_musicId_fkey";

-- DropForeignKey
ALTER TABLE "Performace" DROP CONSTRAINT "Performace_userId_fkey";

-- AlterTable
ALTER TABLE "UserProgressExerciseModule" DROP CONSTRAINT "UserProgressExerciseModule_pkey",
ADD CONSTRAINT "UserProgressExerciseModule_pkey" PRIMARY KEY ("userId", "exerciseModuleId");

-- DropTable
DROP TABLE "Performace";

-- CreateTable
CREATE TABLE "performace" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "musicId" INTEGER NOT NULL,
    "average" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "performace_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "performace_userId_musicId_key" ON "performace"("userId", "musicId");

-- AddForeignKey
ALTER TABLE "performace" ADD CONSTRAINT "performace_musicId_fkey" FOREIGN KEY ("musicId") REFERENCES "Music"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "performace" ADD CONSTRAINT "performace_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
