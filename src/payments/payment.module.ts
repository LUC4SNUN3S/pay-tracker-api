import { Module } from '@nestjs/common'

import { PaymentController } from '@/payments/payment.controller'
import { PaymentRepository } from '@/payments/repositories/payments.repository'
import { PrismaPaymentRepository } from '@/payments/repositories/prisma/prisma-payment.repository'
import { GetPaymentPaginatedUseCase } from '@/payments/use-cases/get-payment-paginated.usecase'
import { UpdatePaymentUseCase } from '@/payments/use-cases/update-payment.usecase'

@Module({
  imports: [],
  controllers: [PaymentController],
  providers: [
    { provide: PaymentRepository, useClass: PrismaPaymentRepository },
    GetPaymentPaginatedUseCase,
    UpdatePaymentUseCase,
  ],
})
export class PaymentModule {}
