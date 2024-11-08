import { Injectable } from '@nestjs/common'

interface IExecuteParams {
  key: string
  page: number
  pageSize: number
}

@Injectable()
export class GetPaymentPaginatedUseCase {
  constructor() {}

  async execute({ page, pageSize, key }: IExecuteParams) {
    console.log({ page, pageSize, key })
  }
}
