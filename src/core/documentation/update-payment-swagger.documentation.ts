import { applyDecorators } from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger'

import {
  BadRequestExampleResponse,
  ConflictExampleResponse,
  NotFoundExampleResponse,
} from '@/core/documentation/response'

export function DocumentUpdatePayment() {
  return applyDecorators(
    ApiOperation({
      summary: 'Atualização de pagamento',
      description: 'Permite atualizar um pagamento',
    }),

    ApiBadRequestResponse({
      example: BadRequestExampleResponse,
    }),

    ApiNotFoundResponse({
      example: NotFoundExampleResponse,
    }),

    ApiConflictResponse({
      example: ConflictExampleResponse,
    }),

    ApiOkResponse({
      description: 'Pagamento atualizado com sucesso!',
    }),
  )
}
