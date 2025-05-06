/*
  Warnings:

  - You are about to drop the `Player` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Player";

-- DropTable
DROP TABLE "Session";

-- CreateTable
CREATE TABLE "GameSession" (
    "id" SERIAL NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3),
    "username" TEXT NOT NULL DEFAULT 'anonymous',
    "duration" DOUBLE PRECISION NOT NULL DEFAULT 999999,

    CONSTRAINT "GameSession_pkey" PRIMARY KEY ("id")
);
