/*
  Warnings:

  - The `location` column on the `Coach` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Location" AS ENUM ('UK', 'Germany', 'USA', 'Emirates');

-- AlterTable
ALTER TABLE "Coach" DROP COLUMN "location",
ADD COLUMN     "location" "Location"[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "location" "Location"[];
