import { applyDecorators } from '@nestjs/common'
import {
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger'

import {
  ConflictExampleResponse,
  InternalServerErrorExampleResponse,
  NotFoundExampleResponse,
} from '@/core/documentation/response'

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
      example: ConflictExampleResponse,
    }),

    ApiNotFoundResponse({
      description: 'Bad Request Exception',
      example: NotFoundExampleResponse,
    }),

    ApiInternalServerErrorResponse({
      description: 'internal server error',
      example: InternalServerErrorExampleResponse,
    }),
  )
}
