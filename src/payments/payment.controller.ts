import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common'

import { UpdatePaymentDto } from '@/payments/dtos/update-payment.dto'
import { GetPaymentPaginatedUseCase } from '@/payments/use-cases/get-payment-paginated.usecase'
import { UpdatePaymentUseCase } from '@/payments/use-cases/update-payment.usecase'

@Controller('payments')
export class PaymentController {
  constructor(
    private readonly getPaymentPaginatedUseCase: GetPaymentPaginatedUseCase,
    private readonly UpdatePaymentUseCase: UpdatePaymentUseCase,
  ) {}

  @Get()
  async getPaymentPaginated(
    @Query('key') key: string,
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return this.getPaymentPaginatedUseCase.execute({
      key,
      page,
      pageSize,
    })
  }

  @Put(':id')
  async updatePayment(
    @Param('id') id: string,
    @Query('key') key: string,
    @Body() updatePaymentDto: UpdatePaymentDto,
  ) {
    console.log({ updatePaymentDto })
    await this.UpdatePaymentUseCase.execute({
      id,
      cacheKey: key,
      updatePaymentDto,
    })
  }
}
