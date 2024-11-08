import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

import {
  FileUploadUseCase,
  FileUploadUseCaseResponse,
} from '@/file-upload/use-cases/file-upload.usecase'

@Controller('upload')
export class FileUploadController {
  constructor(private readonly fileUploadUseCase: FileUploadUseCase) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<FileUploadUseCaseResponse> {
    return await this.fileUploadUseCase.execute(file)
  }
}
