/*
  Warnings:

  - Added the required column `eventSlug` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Purchase" ADD COLUMN     "eventSlug" TEXT NOT NULL;
