import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'

import { PaymentController } from '@/payments/payment.controller'
import { PaymentsRepository } from '@/payments/repositories/payments.repository'
import { PrismaPaymentsRepository } from '@/payments/repositories/prisma/prisma-payment.repository'
import { ProcessFileService } from '@/payments/services/process-file.service'
import {
  ConfirmPaymentsUseCase,
  DeletePaymentUseCase,
  GetPaymentPaginatedUseCase,
  UpdatePaymentUseCase,
  ExportPaymentToCsvUseCase,
  UploadPaymentsUseCase,
} from '@/payments/use-cases'

@Module({
  imports: [MulterModule],
  controllers: [PaymentController],
  providers: [
    { provide: PaymentsRepository, useClass: PrismaPaymentsRepository },
    GetPaymentPaginatedUseCase,
    UpdatePaymentUseCase,
    DeletePaymentUseCase,
    ConfirmPaymentsUseCase,
    ExportPaymentToCsvUseCase,
    UploadPaymentsUseCase,
    ProcessFileService,
  ],
})
export class PaymentModule {}
