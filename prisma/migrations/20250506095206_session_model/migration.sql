/*
  Warnings:

  - You are about to drop the column `data` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `expiresAt` on the `Session` table. All the data in the column will be lost.
  - Added the required column `startTime` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Session" DROP COLUMN "data",
DROP COLUMN "expiresAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "endTime" TIMESTAMP(3),
ADD COLUMN     "playerName" TEXT,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;
