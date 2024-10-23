-- AlterTable
ALTER TABLE "user_overall_progress" ADD COLUMN     "updateFrequency" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
