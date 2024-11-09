import { Injectable } from '@nestjs/common'

import { DatabaseService } from '@/database/database.service'
import { ProcessFileService } from '@/file-upload/services/process-file.service'
import { IPayment } from '@/payments/interfaces/payment.interface'

export const BATCH_SIZE = 1000

export interface FileUploadUseCaseResponse {
  paymentBatchId: string
}

interface ISaveToDatabaseParams {
  data: IPayment[]
}

@Injectable()
export class FileUploadUseCase {
  constructor(
    private readonly processFileService: ProcessFileService,
    private readonly databaseService: DatabaseService,
  ) {}

  async execute(file: Express.Multer.File): Promise<FileUploadUseCaseResponse> {
    console.log({ file })
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
