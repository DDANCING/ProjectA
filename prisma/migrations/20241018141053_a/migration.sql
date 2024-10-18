/*
  Warnings:

  - A unique constraint covering the columns `[musicId]` on the table `ProgressGameMusic` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProgressGameMusic_musicId_key" ON "ProgressGameMusic"("musicId");
