import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Put,
  Query,
} from '@nestjs/common'

import { ListPaymentsInputDto } from '@/payments/dtos/list-payments-input.dto'
import { UpdatePaymentDto } from '@/payments/dtos/update-payment.dto'
import {
  ConfirmPaymentsUseCase,
  DeletePaymentUseCase,
  GetPaymentPaginatedUseCase,
  UpdatePaymentUseCase,
} from '@/payments/use-cases'

@Controller('payments')
export class PaymentController {
  constructor(
    private readonly getPaymentPaginatedUseCase: GetPaymentPaginatedUseCase,
    private readonly updatePaymentUseCase: UpdatePaymentUseCase,
    private readonly deletePaymentUseCase: DeletePaymentUseCase,
    private readonly confirmPaymentsUseCase: ConfirmPaymentsUseCase,
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

  @Patch('confirm/:paymentBatchId')
  async confirmPayment(@Param('paymentBatchId') paymentBatchId: string) {
    await this.confirmPaymentsUseCase.execute(paymentBatchId)
  }

  @Delete(':paymentId')
  async deletePayment(@Param('paymentId') id: string) {
    await this.deletePaymentUseCase.execute({
      id,
    })
  }
}
