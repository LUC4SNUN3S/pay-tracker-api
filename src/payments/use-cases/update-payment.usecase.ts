import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'

import { UpdatePaymentDto } from '@/payments/dtos/update-payment.dto'
import { IPayment } from '@/payments/interfaces/payment.interface'
import { PaymentsRepository } from '@/payments/repositories/payments.repository'

interface IExecuteParams {
  id: string
  updatePaymentDto: UpdatePaymentDto
}

type IApplyValidationsParams = Omit<IExecuteParams, 'updatePaymentDto'>

@Injectable()
export class UpdatePaymentUseCase {
  constructor(private readonly paymentsRepository: PaymentsRepository) {}

  async applyValidations({ id }: IApplyValidationsParams): Promise<{
    payment: IPayment
  }> {
    const payment = await this.paymentsRepository.getPaymentById(id)

    if (!payment) {
      throw new NotFoundException('Ops! Pagamento não encontrado.')
    }

    const paymentBatch =
      await this.paymentsRepository.getPaymentsBatchByBatchId(
        payment.paymentBatchId,
      )

    if (!paymentBatch) {
      throw new NotFoundException('Ops! Lote de pagamentos não encontrado.')
    }

    if (paymentBatch.confirmed) {
      throw new ConflictException(
        'Ops! Você não pode atualizar dados desse pagamento, pois ele já foi confirmado.',
      )
    }

    return {
      payment,
    }
  }

  async execute({ id, updatePaymentDto }: IExecuteParams): Promise<void> {
    const { payment } = await this.applyValidations({
      id,
    })

    await this.paymentsRepository.updatePayment({
      id,
      updatePaymentDto,
      paymentBatchId: payment.paymentBatchId,
    })
  }
}
