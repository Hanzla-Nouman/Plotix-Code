-- CreateEnum
CREATE TYPE "FocusAreas" AS ENUM ('Transition', 'Leadership', 'Productivity', 'Empowerment');

-- AlterTable
ALTER TABLE "Coach" ADD COLUMN     "focusArea" "FocusAreas"[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "focusArea" "FocusAreas"[];
