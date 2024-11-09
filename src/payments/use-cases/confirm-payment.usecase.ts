import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'

import { PaymentsRepository } from '@/payments/repositories/payments.repository'

@Injectable()
export class ConfirmPaymentsUseCase {
  constructor(private readonly paymentRepository: PaymentsRepository) {}

  private async applyValidations(paymentBatchId: string) {
    const paymentBatch =
      await this.paymentRepository.getPaymentsBatchByBatchId(paymentBatchId)

    if (!paymentBatch) {
      throw new NotFoundException('Ops! lote de pagamentos não foi encontrado.')
    }

    if (paymentBatch.confirmed) {
      throw new ConflictException(
        'Ops! Parece que esse lote já foi confirmado.',
      )
    }
  }

  async execute(paymentsBatchId: string): Promise<void> {
    await this.applyValidations(paymentsBatchId)

    await this.paymentRepository.confirmPayment(paymentsBatchId)
  }
}
