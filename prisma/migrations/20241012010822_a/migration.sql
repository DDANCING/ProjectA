/*
  Warnings:

  - A unique constraint covering the columns `[userId,courseId]` on the table `ProgressCourseModule` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `courseId` to the `ProgressCourseModule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProgressCourseModule" ADD COLUMN     "courseId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProgressCourseModule_userId_courseId_key" ON "ProgressCourseModule"("userId", "courseId");
