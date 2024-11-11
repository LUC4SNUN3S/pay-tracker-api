import { HttpStatus } from '@nestjs/common'

const createErrorResponse = (statusCode: number) => ({
  message: 'string',
  error: 'string',
  statusCode,
})

export const NotFoundExampleResponse = createErrorResponse(HttpStatus.NOT_FOUND)
export const ConflictExampleResponse = createErrorResponse(HttpStatus.CONFLICT)
export const BadRequestExampleResponse = createErrorResponse(
  HttpStatus.BAD_REQUEST,
)
export const InternalServerErrorExampleResponse = createErrorResponse(
  HttpStatus.INTERNAL_SERVER_ERROR,
)
