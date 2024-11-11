import { applyDecorators } from '@nestjs/common'
import {
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger'

import {
  ConflictExampleResponse,
  NotFoundExampleResponse,
} from '@/core/documentation/response'

export function DocumentDeletePayment() {
  return applyDecorators(
    ApiOperation({
      summary: 'Deleção de pagamento',
      description: 'Permite deletar um pagamento',
    }),

    ApiNotFoundResponse({
      example: NotFoundExampleResponse,
    }),

    ApiConflictResponse({
      example: ConflictExampleResponse,
    }),

    ApiOkResponse({
      description: 'Pagamento deletado com sucesso!',
    }),
  )
}
