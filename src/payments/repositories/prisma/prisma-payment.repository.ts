import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { createPaginator, PaginatedResult } from 'prisma-pagination'

import { DatabaseService } from '@/database/database.service'
import { PaymentOutputDto } from '@/payments/dtos/payments-output.dto'
import { IListPaymentsFilters } from '@/payments/interfaces/list-payments-filters.interface'
import {
  IPayment,
  IPaymentBatch,
} from '@/payments/interfaces/payment.interface'
import {
  IUpdatePaymentParams,
  PaymentsRepository,
} from '@/payments/repositories/payments.repository'

@Injectable()
export class PrismaPaymentsRepository implements PaymentsRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  private readonly prismaPayments = this.databaseService.payment
  getPaymentsPaginated(
    filters: IListPaymentsFilters,
  ): Promise<PaginatedResult<PaymentOutputDto>> {
    const paginate = createPaginator({
      perPage: filters.perPage ?? 100,
      page: filters.page,
    })

    return paginate<PaymentOutputDto, Prisma.PaymentFindManyArgs>(
      this.prismaPayments,
      {
        where: {
          paymentBatchId: filters.paymentBatchId,
        },
      },
      {
        page: filters.page ?? 1,
      },
    )
  }

  async updatePayment({
    id,
    paymentBatchId,
    updatePaymentDto,
  }: IUpdatePaymentParams): Promise<void> {
    await this.databaseService.$transaction(async (prisma) => {
      await prisma.payment.update({
        where: {
          id,
        },
        data: {
          adress: updatePaymentDto?.adress || null,
          amount: updatePaymentDto.amount,
          birthdayDate: updatePaymentDto?.birthdayDate || null,
          name: updatePaymentDto.name,
          age: updatePaymentDto?.age || null,
          cpf: updatePaymentDto.cpf,
        },
      })

      await prisma.paymentBatch.update({
        where: {
          id: paymentBatchId,
        },
        data: {
          updatedAt: new Date(),
        },
      })
    })
  }

  async deletePayment(id: string): Promise<void> {
    await this.databaseService.payment.delete({
      where: {
        id,
      },
    })
  }

  async confirmPayment(paymentBatchId: string): Promise<void> {
    await this.databaseService.paymentBatch.update({
      where: {
        id: paymentBatchId,
      },

      data: {
        confirmed: true,
        updatedAt: new Date(),
      },
    })
  }

  async getPaymentById(id: string): Promise<IPayment> {
    return this.databaseService.payment.findFirst({
      where: {
        id,
      },
    })
  }

  getPaymentsBatchByBatchId(paymentBatchId: string): Promise<IPaymentBatch> {
    return this.databaseService.paymentBatch.findFirst({
      where: {
        id: paymentBatchId,
      },
    })
  }

  async getPaymentsbyBatchId(paymentBatchId: string): Promise<IPayment[]> {
    return this.databaseService.payment.findMany({
      where: {
        paymentBatchId,
      },
    })
  }
}
