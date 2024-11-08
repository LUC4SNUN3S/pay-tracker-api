import { Injectable } from '@nestjs/common'

import { DatabaseService } from '@/database/database.service'
import { PaymentRepository } from '@/payments/repositories/payments.repository'

@Injectable()
export class PrismaPaymentRepository implements PaymentRepository {
  constructor(private readonly databaseService: DatabaseService) {}
  getPaymentPaginated(): Promise<void> {
    throw new Error('Method not implemented.')
  }

  updatePayment(): Promise<void> {
    throw new Error('Method not implemented.')
  }

  deletePayment(): Promise<void> {
    throw new Error('Method not implemented.')
  }

  confirmPayment(): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
