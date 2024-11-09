import { Transform } from 'class-transformer'
import { IsNumber, IsOptional, IsUUID } from 'class-validator'

import { MessagesValidations } from '@/core/utils/messages-validations.util'

export class ListPaymentsInputDto {
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10)
    }
    return value
  })
  page?: number

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10)
    }
    return value
  })
  perPage?: number

  @IsUUID('4', { message: MessagesValidations.IsUuid('lote de pagamentos') })
  paymentBatchId: string
}
