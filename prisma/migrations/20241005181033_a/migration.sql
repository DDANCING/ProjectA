/*
  Warnings:

  - The values [AUDIO] on the enum `ChallengeType` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `UserProgressExerciseModule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `performace` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ChallengeType_new" AS ENUM ('SELECT', 'ASSIST');
ALTER TABLE "Challenge" ALTER COLUMN "type" TYPE "ChallengeType_new" USING ("type"::text::"ChallengeType_new");
ALTER TYPE "ChallengeType" RENAME TO "ChallengeType_old";
ALTER TYPE "ChallengeType_new" RENAME TO "ChallengeType";
DROP TYPE "ChallengeType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "performace" DROP CONSTRAINT "performace_musicId_fkey";

-- DropForeignKey
ALTER TABLE "performace" DROP CONSTRAINT "performace_userId_fkey";

-- AlterTable
ALTER TABLE "UserProgressExerciseModule" DROP CONSTRAINT "UserProgressExerciseModule_pkey",
ADD CONSTRAINT "UserProgressExerciseModule_pkey" PRIMARY KEY ("userId");

-- DropTable
DROP TABLE "performace";

-- CreateTable
CREATE TABLE "Performace" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "musicId" INTEGER NOT NULL,
    "average" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Performace_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Performace_userId_musicId_key" ON "Performace"("userId", "musicId");

-- AddForeignKey
ALTER TABLE "Performace" ADD CONSTRAINT "Performace_musicId_fkey" FOREIGN KEY ("musicId") REFERENCES "Music"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Performace" ADD CONSTRAINT "Performace_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
