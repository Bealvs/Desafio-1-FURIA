-- CreateTable
CREATE TABLE "ChatOption" (
    "id" SERIAL NOT NULL,
    "option" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChatOption_pkey" PRIMARY KEY ("id")
);
