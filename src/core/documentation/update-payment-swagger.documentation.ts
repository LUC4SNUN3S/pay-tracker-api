import { applyDecorators } from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger'

export function DocumentUpdatePayment() {
  return applyDecorators(
    ApiOperation({
      summary: 'Atualização de pagamento',
      description: 'Permite atualizar um pagamento',
    }),

    ApiBadRequestResponse({
      example: {
        message: 'string',
        error: 'string',
        statusCode: 400,
      },
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
      description: 'Pagamento atualizado com sucesso!',
    }),
  )
}
