import { BadRequestException, Injectable } from '@nestjs/common'
import { extname } from 'path'

import { DatabaseService } from '@/database/database.service'
import { IPayment } from '@/payments/interfaces/payment.interface'
import { ProcessFileService } from '@/payments/services/process-file.service'

export const BATCH_SIZE = 1000

export interface FileUploadUseCaseResponse {
  paymentBatchId: string
}

interface ISaveToDatabaseParams {
  data: IPayment[]
}

@Injectable()
export class UploadPaymentsUseCase {
  constructor(
    private readonly processFileService: ProcessFileService,
    private readonly databaseService: DatabaseService,
  ) {}

  private applyValidations(file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Ops! O arquivo precisa ser enviado.')
    }

    const allowedTypes = /txt|rem/
    const ext = extname(file.originalname).toLowerCase()

    if (!allowedTypes.test(ext)) {
      throw new BadRequestException(
        'Ops! O arquivo precisa ser um .txt ou .rem',
      )
    }
  }

  async execute(file: Express.Multer.File): Promise<FileUploadUseCaseResponse> {
    this.applyValidations(file)

    const fileBuffer = file.buffer

    const parsedData = await this.processFileService.execute(fileBuffer)

    const paymentBatchId = await this.saveToDatabase({
      data: parsedData,
    })

    return { paymentBatchId }
  }

  private async saveToDatabase({
    data,
  }: ISaveToDatabaseParams): Promise<string> {
    await this.databaseService.paymentBatch.create({
      data: {
        id: data[0].paymentBatchId,
        updatedAt: new Date(),
        confirmed: false,
        createdAt: new Date(),
      },
    })
    await this.databaseService.$transaction(async (prisma) => {
      await prisma.payment.createMany({
        data,
      })
    })

    return data[0].paymentBatchId
  }
}
