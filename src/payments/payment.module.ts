import { Module } from '@nestjs/common'

import { PaymentController } from '@/payments/payment.controller'
import { PaymentsRepository } from '@/payments/repositories/payments.repository'
import { PrismaPaymentsRepository } from '@/payments/repositories/prisma/prisma-payment.repository'
import { DeletePaymentUseCase } from '@/payments/use-cases/delete-payment.usecase'
import { GetPaymentPaginatedUseCase } from '@/payments/use-cases/get-payment-paginated.usecase'
import { UpdatePaymentUseCase } from '@/payments/use-cases/update-payment.usecase'

@Module({
  imports: [],
  controllers: [PaymentController],
  providers: [
    { provide: PaymentsRepository, useClass: PrismaPaymentsRepository },
    GetPaymentPaginatedUseCase,
    UpdatePaymentUseCase,
    DeletePaymentUseCase,
  ],
})
export class PaymentModule {}
