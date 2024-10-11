/*
  Warnings:

  - You are about to drop the column `chapterId` on the `ProgressCourseModule` table. All the data in the column will be lost.
  - You are about to drop the column `courseId` on the `ProgressCourseModule` table. All the data in the column will be lost.
  - Added the required column `userImageSrc` to the `ProgressCourseModule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `ProgressCourseModule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProgressCourseModule" DROP COLUMN "chapterId",
DROP COLUMN "courseId",
ADD COLUMN     "userImageSrc" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;
