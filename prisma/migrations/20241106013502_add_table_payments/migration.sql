-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(15) NOT NULL,
    "adress" VARCHAR(4) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "birthday_date" VARCHAR(8) NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);
