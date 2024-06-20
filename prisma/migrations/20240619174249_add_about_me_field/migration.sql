/*
  Warnings:

  - You are about to drop the `CoachCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CoachCategoryToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CoachToCoachCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "CoachingCategories" AS ENUM ('Comics', 'Manga');

-- DropForeignKey
ALTER TABLE "_CoachCategoryToUser" DROP CONSTRAINT "_CoachCategoryToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_CoachCategoryToUser" DROP CONSTRAINT "_CoachCategoryToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_CoachToCoachCategory" DROP CONSTRAINT "_CoachToCoachCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_CoachToCoachCategory" DROP CONSTRAINT "_CoachToCoachCategory_B_fkey";

-- AlterTable
ALTER TABLE "Coach" ADD COLUMN     "coachingCategories" "CoachingCategories"[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "aboutMe" TEXT,
ADD COLUMN     "preferedCoachCategories" "CoachingCategories"[];

-- DropTable
DROP TABLE "CoachCategory";

-- DropTable
DROP TABLE "_CoachCategoryToUser";

-- DropTable
DROP TABLE "_CoachToCoachCategory";
