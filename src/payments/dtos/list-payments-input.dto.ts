import { Transform } from 'class-transformer'
import { IsNumber, IsOptional, IsUUID } from 'class-validator'

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

  @IsUUID()
  paymentBatchId: string
}
