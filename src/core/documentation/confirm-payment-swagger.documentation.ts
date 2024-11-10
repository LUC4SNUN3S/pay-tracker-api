import { applyDecorators } from '@nestjs/common'
import {
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger'

export function DocumentConfirmPayment() {
  return applyDecorators(
    ApiOperation({
      summary: 'Confirmação de pagamentos',
      description: 'Permite confirmar todos os pagamentos',
    }),

    ApiNotFoundResponse({
      example: {
        message: 'string',
        error: 'string',
        statusCode: 409,
      },
    }),

    ApiConflictResponse({
      example: {
        message: 'string',
        error: 'string',
        statusCode: 409,
      },
    }),

    ApiOkResponse({
      description: 'Pagamentos confirmados com sucesso!',
    }),
  )
}
