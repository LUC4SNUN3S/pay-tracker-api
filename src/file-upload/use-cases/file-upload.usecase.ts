import { Injectable } from '@nestjs/common'
import { createHash } from 'crypto'

import { ProcessFileService } from '@/file-upload/services/process-file.service'
import { IPayment } from '@/payments/interfaces/payment.interface'

export const BATCH_SIZE = 1000

export interface FileUploadUseCaseResponse {
  key: string
}

interface ISaveToDatabaseParams {
  data: IPayment[]
}

@Injectable()
export class FileUploadUseCase {
  constructor(private readonly processFileService: ProcessFileService) {}

  async execute(file: Express.Multer.File): Promise<FileUploadUseCaseResponse> {
    const fileBuffer = file.buffer

    const hash = createHash('sha256')
      .update(file.buffer)
      .digest('hex')
      .slice(0, 10)

    const dateUpload = new Date().getUTCMilliseconds()
    const key = `${hash}-${dateUpload}`

    const parsedData = await this.processFileService.execute(fileBuffer)

    await this.saveToDatabase({
      data: parsedData,
    })

    return { key }
  }

  private async saveToDatabase({ data }: ISaveToDatabaseParams): Promise<void> {
    console.log(data)
  }
}
