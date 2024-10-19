/*
  Warnings:

  - You are about to drop the `Performace` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Performace" DROP CONSTRAINT "Performace_musicId_fkey";

-- DropForeignKey
ALTER TABLE "Performace" DROP CONSTRAINT "Performace_userId_fkey";

-- DropTable
DROP TABLE "Performace";

-- AddForeignKey
ALTER TABLE "ProgressGameMusic" ADD CONSTRAINT "ProgressGameMusic_musicId_fkey" FOREIGN KEY ("musicId") REFERENCES "Music"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
