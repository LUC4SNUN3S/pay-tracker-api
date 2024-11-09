import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'

import { FileUploadController } from '@/file-upload/file-upload.controller'
import { ProcessFileService } from '@/file-upload/services/process-file.service'
import { FileUploadUseCase } from '@/file-upload/use-cases/file-upload.usecase'

@Module({
  imports: [MulterModule],

  controllers: [FileUploadController],

  providers: [ProcessFileService, FileUploadUseCase],
})
export class FileUploadModule {}
