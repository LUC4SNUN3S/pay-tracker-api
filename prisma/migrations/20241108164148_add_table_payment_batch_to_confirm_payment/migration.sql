/*
  Warnings:

  - Added the required column `paymentBatchId` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "paymentBatchId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "payment_batch" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "confirmed" BOOLEAN NOT NULL,

    CONSTRAINT "payment_batch_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_paymentBatchId_fkey" FOREIGN KEY ("paymentBatchId") REFERENCES "payment_batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
