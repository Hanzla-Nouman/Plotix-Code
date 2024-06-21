/*
  Warnings:

  - The `location` column on the `Coach` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `location` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Coach" DROP COLUMN "location",
ADD COLUMN     "location" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "location",
ADD COLUMN     "location" TEXT;
