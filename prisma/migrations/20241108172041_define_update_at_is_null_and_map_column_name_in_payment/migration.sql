/*
  Warnings:

  - You are about to drop the column `paymentBatchId` on the `payments` table. All the data in the column will be lost.
  - Added the required column `payment_batch_id` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_paymentBatchId_fkey";

-- AlterTable
ALTER TABLE "payment_batch" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "paymentBatchId",
ADD COLUMN     "payment_batch_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_payment_batch_id_fkey" FOREIGN KEY ("payment_batch_id") REFERENCES "payment_batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
