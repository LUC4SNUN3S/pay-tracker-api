import { Injectable } from '@nestjs/common'

import { PaginatedOutputDto } from '@/core/dtos/paginated-output.dto'
import { ListPaymentsInputDto } from '@/payments/dtos/list-payments-input.dto'
import { PaymentOutputDto } from '@/payments/dtos/payments-output.dto'
import { PaymentsRepository } from '@/payments/repositories/payments.repository'

interface IExecuteParams {
  listPaymentsInputDto: ListPaymentsInputDto
}

interface IExecuteResponse {
  payments: PaginatedOutputDto<PaymentOutputDto>
}

@Injectable()
export class GetPaymentPaginatedUseCase {
  constructor(private readonly paymentsRepository: PaymentsRepository) {}

  async execute({
    listPaymentsInputDto,
  }: IExecuteParams): Promise<IExecuteResponse> {
    const payments =
      await this.paymentsRepository.getPaymentsPaginated(listPaymentsInputDto)

    return {
      payments,
    }
  }
}
