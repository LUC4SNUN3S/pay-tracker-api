import { Module } from '@nestjs/common'

import { PaymentController } from '@/payments/payment.controller'
import { PaymentsRepository } from '@/payments/repositories/payments.repository'
import { PrismaPaymentsRepository } from '@/payments/repositories/prisma/prisma-payment.repository'
import {
  ConfirmPaymentsUseCase,
  DeletePaymentUseCase,
  GetPaymentPaginatedUseCase,
  UpdatePaymentUseCase,
} from '@/payments/use-cases'

@Module({
  imports: [],
  controllers: [PaymentController],
  providers: [
    { provide: PaymentsRepository, useClass: PrismaPaymentsRepository },
    GetPaymentPaginatedUseCase,
    UpdatePaymentUseCase,
    DeletePaymentUseCase,
    ConfirmPaymentsUseCase,
  ],
})
export class PaymentModule {}
