import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Put,
  Query,
  Res,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

import { DocumentConfirmPayment } from '@/core/documentation/confirm-payment-swagger.documentation'
import { DocumentDeletePayment } from '@/core/documentation/delete-payment-swagger.documentation'
import { DocumentExportPaymentToCsv } from '@/core/documentation/export-payments-to-csv.documentation'
import { DocumentGetPaymentsPaginate } from '@/core/documentation/get-payments-paginate-swagger.documentation'
import { DocumentUpdatePayment } from '@/core/documentation/update-payment-swagger.documentation'
import { ListPaymentsInputDto } from '@/payments/dtos/list-payments-input.dto'
import { UpdatePaymentDto } from '@/payments/dtos/update-payment.dto'
import {
  ConfirmPaymentsUseCase,
  DeletePaymentUseCase,
  GetPaymentPaginatedUseCase,
  UpdatePaymentUseCase,
} from '@/payments/use-cases'
import { ExportPaymentToCsvUseCase } from '@/payments/use-cases/export-payment-csv.usecase'

@ApiTags('Payments')
@Controller('payments')
export class PaymentController {
  constructor(
    private readonly getPaymentPaginatedUseCase: GetPaymentPaginatedUseCase,
    private readonly updatePaymentUseCase: UpdatePaymentUseCase,
    private readonly deletePaymentUseCase: DeletePaymentUseCase,
    private readonly confirmPaymentsUseCase: ConfirmPaymentsUseCase,
    private readonly exportPaymentsToCsvUseCase: ExportPaymentToCsvUseCase,
  ) {}

  @DocumentGetPaymentsPaginate()
  @Get()
  async getPaymentPaginated(
    @Query() listPaymentsInputDto: ListPaymentsInputDto,
  ) {
    const { payments } = await this.getPaymentPaginatedUseCase.execute({
      listPaymentsInputDto,
    })

    return payments
  }

  @DocumentExportPaymentToCsv()
  @Get('export-to-csv')
  async exportPaymentsToCsv(
    @Query('paymentBatchId') paymentBatchId: string,
    @Res() response: Response,
  ) {
    await this.exportPaymentsToCsvUseCase.execute(paymentBatchId, response)
  }

  @DocumentUpdatePayment()
  @Put(':paymentId')
  async updatePayment(
    @Param('paymentId') id: string,
    @Body() updatePaymentDto: UpdatePaymentDto,
  ): Promise<void> {
    await this.updatePaymentUseCase.execute({
      id,
      updatePaymentDto,
    })
  }

  @DocumentConfirmPayment()
  @Patch('confirm/:paymentBatchId')
  async confirmPayment(
    @Param('paymentBatchId') paymentBatchId: string,
  ): Promise<void> {
    await this.confirmPaymentsUseCase.execute(paymentBatchId)
  }

  @DocumentDeletePayment()
  @Delete(':paymentId')
  async deletePayment(@Param('paymentId') id: string) {
    await this.deletePaymentUseCase.execute({
      id,
    })
  }
}
