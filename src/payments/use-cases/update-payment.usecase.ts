import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'

import { ValidAndParseDate } from '@/core/utils/parse-data.util'
import { UpdatePaymentDto } from '@/payments/dtos/update-payment.dto'
import { PaymentsRepository } from '@/payments/repositories/payments.repository'

interface IExecuteParams {
  id: string
  updatePaymentDto: UpdatePaymentDto
}
type IApplyValidationsParams = IExecuteParams

@Injectable()
export class UpdatePaymentUseCase {
  constructor(private readonly paymentsRepository: PaymentsRepository) {}

  async applyValidations({ id, updatePaymentDto }: IApplyValidationsParams) {
    const { birthdayDate } = updatePaymentDto
    const payment = await this.paymentsRepository.getPaymentById(id)

    if (!payment) {
      throw new NotFoundException('Ops! Pagamento Não encontrado')
    }
    const formatedBirthdayDate = ValidAndParseDate(birthdayDate)

    if (!formatedBirthdayDate) {
      throw new BadRequestException('Ops! Data de nascimento inválido')
    }

    return { formatedBirthdayDate, payment }
  }

  async execute({ id, updatePaymentDto }: IExecuteParams): Promise<void> {
    const { formatedBirthdayDate, payment } = await this.applyValidations({
      id,
      updatePaymentDto,
    })

    await this.paymentsRepository.updatePayment({
      id,
      updatePaymentDto: {
        ...updatePaymentDto,
        birthdayDate: formatedBirthdayDate,
      },
      paymentBatchId: payment.paymentBatchId,
    })
  }
}
