-- AlterTable
ALTER TABLE "ProgressGameMusic" ADD COLUMN     "userImageSrc" TEXT NOT NULL DEFAULT '/mascot.svg',
ADD COLUMN     "userName" TEXT NOT NULL DEFAULT 'User';

-- AlterTable
ALTER TABLE "user_overall_progress" ADD COLUMN     "userImageSrc" TEXT NOT NULL DEFAULT '/mascot.svg',
ADD COLUMN     "userName" TEXT NOT NULL DEFAULT 'User';
