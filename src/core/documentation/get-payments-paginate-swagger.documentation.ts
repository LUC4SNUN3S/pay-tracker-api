import { applyDecorators } from '@nestjs/common'
import { ApiOperation, ApiQuery } from '@nestjs/swagger'

import { ApiPaginatedResponse } from '@/core/decorators/api-paginated-response.decorator'
import { PaymentOutputDto } from '@/payments/dtos/payments-output.dto'

export function DocumentGetPaymentsPaginate() {
  return applyDecorators(
    ApiOperation({
      summary: 'Visualização de pagamentos',
      description: 'Permite visualizar a lista de pagamentos de forma paginada',
    }),
    ApiPaginatedResponse(PaymentOutputDto),
    ApiQuery({ required: true, name: 'paymentBatchId' }),
    ApiQuery({ required: false, name: 'page' }),
    ApiQuery({ required: false, name: 'perPage' }),
  )
}
