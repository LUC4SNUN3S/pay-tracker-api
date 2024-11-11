-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(15) NOT NULL,
    "adress" VARCHAR(34),
    "age" INTEGER,
    "cpf" VARCHAR(14) NOT NULL,
    "birthday_date" VARCHAR(11),
    "payment_batch_id" TEXT NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_batch" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "confirmed" BOOLEAN NOT NULL,

    CONSTRAINT "payment_batch_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_payment_batch_id_fkey" FOREIGN KEY ("payment_batch_id") REFERENCES "payment_batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
