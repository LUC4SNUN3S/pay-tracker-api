import { PaginatedResult } from 'prisma-pagination'

import { PaymentOutputDto } from '@/payments/dtos/payments-output.dto'
import { UpdatePaymentDto } from '@/payments/dtos/update-payment.dto'
import { IListPaymentsFilters } from '@/payments/interfaces/list-payments-filters.interface'
import {
  IPayment,
  IPaymentBatch,
} from '@/payments/interfaces/payment.interface'

export interface IUpdatePaymentParams {
  id: string
  updatePaymentDto: UpdatePaymentDto
  paymentBatchId: string
}

export abstract class PaymentsRepository {
  abstract confirmPayment(paymentBatchId: string): Promise<void>
  abstract getPaymentsPaginated(
    filters: IListPaymentsFilters,
  ): Promise<PaginatedResult<PaymentOutputDto>>

  abstract getPaymentsbyBatchId(paymentBatchId: string): Promise<IPayment[]>

  abstract updatePayment({
    id,
    paymentBatchId,
    updatePaymentDto,
  }: IUpdatePaymentParams): Promise<void>

  abstract deletePayment(id: string): Promise<void>

  abstract getPaymentById(id: string): Promise<IPayment>

  abstract getPaymentsBatchByBatchId(
    paymentBatchId: string,
  ): Promise<IPaymentBatch>
}
