/*
  Warnings:

  - Added the required column `userImageSrc` to the `ProgressGameMusic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `ProgressGameMusic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProgressGameMusic" ADD COLUMN     "userImageSrc" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;
