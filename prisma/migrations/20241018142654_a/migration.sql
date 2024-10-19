/*
  Warnings:

  - A unique constraint covering the columns `[userId,musicId]` on the table `ProgressGameMusic` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `progressGameId` to the `ProgressGameMusic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProgressGameMusic" ADD COLUMN     "progressGameId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProgressGameMusic_userId_musicId_key" ON "ProgressGameMusic"("userId", "musicId");

-- AddForeignKey
ALTER TABLE "ProgressGameMusic" ADD CONSTRAINT "ProgressGameMusic_progressGameId_fkey" FOREIGN KEY ("progressGameId") REFERENCES "ProgressGame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
