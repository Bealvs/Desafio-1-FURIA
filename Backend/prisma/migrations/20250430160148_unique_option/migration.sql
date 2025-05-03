/*
  Warnings:

  - A unique constraint covering the columns `[option]` on the table `ChatOption` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ChatOption_option_key" ON "ChatOption"("option");
