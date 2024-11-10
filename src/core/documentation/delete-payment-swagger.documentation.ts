import { applyDecorators } from '@nestjs/common'
import {
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger'

export function DocumentDeletePayment() {
  return applyDecorators(
    ApiOperation({
      summary: 'Deleção de pagamento',
      description: 'Permite deletar um pagamento',
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
      description: 'Pagamento deletado com sucesso!',
    }),
  )
}
