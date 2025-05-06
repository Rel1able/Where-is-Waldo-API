/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `endTime` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `playerName` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Session` table. All the data in the column will be lost.
  - Added the required column `data` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiresAt` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Session" DROP COLUMN "createdAt",
DROP COLUMN "endTime",
DROP COLUMN "playerName",
DROP COLUMN "startTime",
ADD COLUMN     "data" TEXT NOT NULL,
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL;
