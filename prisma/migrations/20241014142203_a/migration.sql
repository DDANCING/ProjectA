/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `ProgressGameMusic` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProgressGameMusic_userId_key" ON "ProgressGameMusic"("userId");
