import { applyDecorators } from '@nestjs/common'
import {
  ApiOperation,
  ApiConsumes,
  ApiResponse,
  ApiBody,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger'

import {
  BadRequestExampleResponse,
  InternalServerErrorExampleResponse,
} from '@/core/documentation/response'

export function DocumentFileUploadEndpoint() {
  return applyDecorators(
    ApiOperation({
      summary: 'Upload de arquivo de pagamentos',
      description:
        'Faz o upload de um arquivo de pagamentos para o servidor e retorna o id do lote de pagamentos.',
    }),

    ApiConsumes('multipart/form-data'),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          file: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    }),

    ApiResponse({
      status: 201,
      description: 'Upload do arquivo realizado com sucesso.',
      schema: {
        example: {
          paymentBatchId: 'string',
        },
      },
    }),

    ApiBadRequestResponse({
      description: 'Bad Request Exception',
      example: BadRequestExampleResponse,
    }),

    ApiInternalServerErrorResponse({
      description: 'Erro interno no servidor ao processar o arquivo.',
      example: InternalServerErrorExampleResponse,
    }),
  )
}
