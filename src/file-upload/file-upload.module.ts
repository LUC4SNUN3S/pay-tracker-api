import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'

import { FileUploadController } from '@/file-upload/file-upload.controller'
import { ProcessFileService } from '@/file-upload/services/process-file.service'
import { FileUploadUseCase } from '@/file-upload/use-cases/file-upload.usecase'

@Module({
  imports: [
    MulterModule.register({
      fileFilter: (req, file, callback) => {
        // Verificando o MIME type do arquivo
        if (file.mimetype !== 'application/octet-stream') {
          return callback(
            new Error(
              'Invalid file type. Only .rem files (octet-stream) are allowed',
            ),
            false,
          )
        }
        callback(null, true)
      },
    }),
  ],

  controllers: [FileUploadController],

  providers: [ProcessFileService, FileUploadUseCase],
})
export class FileUploadModule {}
