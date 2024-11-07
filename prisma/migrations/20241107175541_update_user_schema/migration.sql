/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clerkId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
DROP COLUMN "username",
ADD COLUMN     "clerkId" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "imageurl" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("clerkId");

-- CreateTable
CREATE TABLE "Podcast" (
    "id" TEXT NOT NULL,
    "podcastTitle" TEXT NOT NULL,
    "podcastDescription" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "audioUrl" TEXT NOT NULL,
    "imageStorageId" TEXT NOT NULL,
    "audioStorageId" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "authorImageUrl" TEXT NOT NULL,
    "audioPrompt" TEXT NOT NULL,
    "imagePrompt" TEXT NOT NULL,
    "audioDuration" INTEGER NOT NULL,
    "voiceType" TEXT NOT NULL,
    "views" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Podcast_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- AddForeignKey
ALTER TABLE "Podcast" ADD CONSTRAINT "Podcast_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;
