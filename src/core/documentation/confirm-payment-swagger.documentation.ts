import { applyDecorators } from '@nestjs/common'
import {
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger'

import { ConflictExampleResponse, NotFoundExampleResponse } from './response'

export function DocumentConfirmPayment() {
  return applyDecorators(
    ApiOperation({
      summary: 'Confirmação de pagamentos',
      description: 'Permite confirmar todos os pagamentos',
    }),

    ApiNotFoundResponse({
      example: NotFoundExampleResponse,
    }),

    ApiConflictResponse({
      example: ConflictExampleResponse,
    }),

    ApiOkResponse({
      description: 'Pagamentos confirmados com sucesso!',
    }),
  )
}
