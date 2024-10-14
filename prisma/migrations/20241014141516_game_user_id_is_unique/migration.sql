/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `ProgressCourseModule` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProgressCourseModule_userId_key" ON "ProgressCourseModule"("userId");
