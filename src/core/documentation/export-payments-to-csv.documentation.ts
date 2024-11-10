import { applyDecorators } from '@nestjs/common'
import {
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger'

export function DocumentExportPaymentToCsv() {
  return applyDecorators(
    ApiOperation({
      summary: 'Download de pagamentos em CSV',
      description:
        'Faz o Download de todos pagamentos pelo id do lote de pagamentos em CSV.',
    }),

    ApiQuery({ required: true, name: 'paymentBatchId' }),

    ApiResponse({
      status: 200,
      description: 'Arquivo CSV gerado com sucesso',
      content: {
        'text/csv': {
          schema: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    }),

    ApiConflictResponse({
      description: 'Conflict Exception',
      example: {
        message: 'string',
        error: 'string',
        statusCode: 409,
      },
    }),

    ApiNotFoundResponse({
      description: 'Bad Request Exception',
      example: {
        message: 'string',
        error: 'string',
        statusCode: 404,
      },
    }),

    ApiInternalServerErrorResponse({
      description: 'internal server error',
      example: {
        message: 'string',
        error: 'string',
        statusCode: 500,
      },
    }),
  )
}
