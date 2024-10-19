-- CreateTable
CREATE TABLE "MonthlyProgress" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "averagePoints" DOUBLE PRECISION NOT NULL,
    "exercisePoints" DOUBLE PRECISION NOT NULL,
    "gameMusicPoints" DOUBLE PRECISION NOT NULL,
    "videoPoints" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "MonthlyProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MonthlyProgress_userId_month_year_key" ON "MonthlyProgress"("userId", "month", "year");

-- AddForeignKey
ALTER TABLE "MonthlyProgress" ADD CONSTRAINT "MonthlyProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
