import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Query,
} from '@nestjs/common'

import { ListPaymentsInputDto } from '@/payments/dtos/list-payments-input.dto'
import { UpdatePaymentDto } from '@/payments/dtos/update-payment.dto'
import { DeletePaymentUseCase } from '@/payments/use-cases/delete-payment.usecase'
import { GetPaymentPaginatedUseCase } from '@/payments/use-cases/get-payment-paginated.usecase'
import { UpdatePaymentUseCase } from '@/payments/use-cases/update-payment.usecase'

@Controller('payments')
export class PaymentController {
  constructor(
    private readonly getPaymentPaginatedUseCase: GetPaymentPaginatedUseCase,
    private readonly updatePaymentUseCase: UpdatePaymentUseCase,
    private readonly deletePaymentUseCase: DeletePaymentUseCase,
  ) {}

  @Get()
  async getPaymentPaginated(
    @Query() listPaymentsInputDto: ListPaymentsInputDto,
  ) {
    const { payments } = await this.getPaymentPaginatedUseCase.execute({
      listPaymentsInputDto,
    })

    return payments
  }

  @Put(':paymentId')
  async updatePayment(
    @Param('paymentId') id: string,
    @Body() updatePaymentDto: UpdatePaymentDto,
  ) {
    await this.updatePaymentUseCase.execute({
      id,
      updatePaymentDto,
    })
  }

  @Delete(':paymentId')
  async deletePayment(@Param('paymentId') id: string) {
    await this.deletePaymentUseCase.execute({
      id,
    })
  }
}
