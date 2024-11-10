import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiTags } from '@nestjs/swagger'

import { DocumentFileUploadEndpoint } from '@/core/documentation/upload-file-swagger.documentation'
import {
  FileUploadUseCase,
  FileUploadUseCaseResponse,
} from '@/file-upload/use-cases/file-upload.usecase'

@ApiTags('File-uploads')
@Controller('upload')
export class FileUploadController {
  constructor(private readonly fileUploadUseCase: FileUploadUseCase) {}

  @Post()
  @DocumentFileUploadEndpoint()
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<FileUploadUseCaseResponse> {
    return await this.fileUploadUseCase.execute(file)
  }
}
