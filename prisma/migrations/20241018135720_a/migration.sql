/*
  Warnings:

  - The primary key for the `ProgressGameMusic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `gameMusicModuleId` on the `ProgressGameMusic` table. All the data in the column will be lost.
  - You are about to drop the column `hearts` on the `ProgressGameMusic` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `ProgressGameMusic` table. All the data in the column will be lost.
  - You are about to drop the column `userImageSrc` on the `ProgressGameMusic` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `ProgressGameMusic` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProgressGameMusic" DROP CONSTRAINT "ProgressGameMusic_pkey",
DROP COLUMN "gameMusicModuleId",
DROP COLUMN "hearts",
DROP COLUMN "points",
DROP COLUMN "userImageSrc",
DROP COLUMN "userName",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ProgressGameMusic_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ProgressGameMusic_id_seq";

-- CreateTable
CREATE TABLE "ProgressGame" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "hearts" INTEGER NOT NULL DEFAULT 5,
    "points" INTEGER NOT NULL DEFAULT 0,
    "totalPercentage" INTEGER NOT NULL DEFAULT 0,
    "totalLastPercentageWin" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProgressGame_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProgressGame_userId_key" ON "ProgressGame"("userId");
