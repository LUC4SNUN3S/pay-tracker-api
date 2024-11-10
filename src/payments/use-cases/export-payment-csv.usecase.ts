import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { Response } from 'express'
import * as fastCsv from 'fast-csv'

import { IPayment } from '@/payments/interfaces/payment.interface'
import { PaymentsRepository } from '@/payments/repositories/payments.repository'

type headers = {
  [key in keyof Omit<IPayment, 'id' | 'paymentBatchId'>]: string
}

const headersInPtBr: headers = {
  name: 'Nome',
  adress: 'Endereço',
  age: 'Idade',
  amount: 'Valor',
  birthdayDate: 'Data de nascimento',
  cpf: 'CPF',
}

@Injectable()
export class ExportPaymentToCsvUseCase {
  constructor(private readonly paymentsRepository: PaymentsRepository) {}

  async applyValidations(paymentBatchId: string) {
    const paymentBatch =
      await this.paymentsRepository.getPaymentsBatchByBatchId(paymentBatchId)

    if (!paymentBatch) {
      throw new NotFoundException('Ops! Lote de pagamentos não encontrado')
    }

    if (!paymentBatch.confirmed) {
      throw new ConflictException(
        'Ops! Você não pode exportar pagamentos que não foram confirmados.',
      )
    }
  }

  private mapPaymentToCsvRow(payment: IPayment) {
    return {
      [headersInPtBr.name]: payment.name,
      [headersInPtBr.age]: payment.age,
      [headersInPtBr.adress]: payment.adress,
      [headersInPtBr.cpf]: payment.cpf,
      [headersInPtBr.amount]: payment.amount,
      [headersInPtBr.birthdayDate]: payment.birthdayDate,
    }
  }

  private async exportToCsv(payments: IPayment[], response: Response) {
    const filename = 'payments-export.csv'

    response.setHeader('Content-Type', 'text/csv')
    response.setHeader(
      'Content-Disposition',
      `attachment; filename=${filename}`,
    )

    const csvStream = fastCsv.format({ headers: true })

    csvStream.pipe(response)

    for (const payment of payments) {
      csvStream.write(this.mapPaymentToCsvRow(payment))
    }

    csvStream.end()
  }

  async execute(paymentBatchId: string, response: Response) {
    const payments =
      await this.paymentsRepository.getPaymentsbyBatchId(paymentBatchId)

    await this.applyValidations(paymentBatchId)

    return this.exportToCsv(payments, response)
  }
}
