import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'

import { PaymentsRepository } from '@/payments/repositories/payments.repository'

interface IExecuteParams {
  id: string
}
type IApplyValidationsParams = IExecuteParams

@Injectable()
export class DeletePaymentUseCase {
  constructor(private readonly paymentsRepository: PaymentsRepository) {}

  async applyValidations({ id }: IApplyValidationsParams) {
    const payment = await this.paymentsRepository.getPaymentById(id)

    if (!payment) {
      throw new NotFoundException('Ops! Pagamento Não encontrado.')
    }

    const batchPayments =
      await this.paymentsRepository.getPaymentsBatchByBatchId(
        payment.paymentBatchId,
      )

    if (!batchPayments) {
      throw new NotFoundException('Ops! Batch nao encontrado.')
    }

    if (batchPayments.confirmed) {
      throw new ConflictException(
        'Ops! Pagamento não pode ser excluído, pois já foi confirmado!',
      )
    }
  }

  async execute({ id }: IExecuteParams): Promise<void> {
    await this.applyValidations({
      id,
    })

    await this.paymentsRepository.deletePayment(id)
  }
}
