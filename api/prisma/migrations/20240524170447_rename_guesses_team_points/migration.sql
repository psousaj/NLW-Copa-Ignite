/*
  Warnings:

  - You are about to drop the column `firstTeamPoint` on the `Guess` table. All the data in the column will be lost.
  - You are about to drop the column `secondTeamPoint` on the `Guess` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Pool` table. All the data in the column will be lost.
  - Added the required column `firstTeamPoints` to the `Guess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondTeamPoints` to the `Guess` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pool" DROP CONSTRAINT "Pool_userId_fkey";

-- AlterTable
ALTER TABLE "Guess" DROP COLUMN "firstTeamPoint",
DROP COLUMN "secondTeamPoint",
ADD COLUMN     "firstTeamPoints" INTEGER NOT NULL,
ADD COLUMN     "secondTeamPoints" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Pool" DROP COLUMN "userId",
ADD COLUMN     "ownerId" TEXT;

-- AddForeignKey
ALTER TABLE "Pool" ADD CONSTRAINT "Pool_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
