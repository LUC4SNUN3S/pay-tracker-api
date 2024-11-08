import { Injectable } from '@nestjs/common'

import { UpdatePaymentDto } from '@/payments/dtos/update-payment.dto'

import { IPayment } from '../interfaces/payment.interface'

interface IExecuteParams {
  id: string
  cacheKey: string
  updatePaymentDto: UpdatePaymentDto
}

@Injectable()
export class UpdatePaymentUseCase {
  constructor() {}

  private async updatePaymentInCache(
    cacheKey: string,
    index: string,
    updatePaymentDto: UpdatePaymentDto,
    payment: IPayment,
  ) {
    console.log({ cacheKey, index, updatePaymentDto, payment })
  }

  async execute({
    id,
    updatePaymentDto,
    cacheKey,
  }: IExecuteParams): Promise<void> {
    console.log({ id, updatePaymentDto, cacheKey })
  }
}
