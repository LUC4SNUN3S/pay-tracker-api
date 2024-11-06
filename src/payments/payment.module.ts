import { Module } from "@nestjs/common";
import { PaymentRepository } from "@/payments/repositories/payments.repository";
import { PrismaPaymentRepository } from "@/payments/repositories/prisma/prisma-payment.repository";
import { PaymentController } from "@/payments/payment.controller";
import { MulterModule } from "@nestjs/platform-express";
import { FileUploadService } from "@/payments/file-upload/file-upload.service";

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',  // pasta onde os arquivos serão armazenados
      fileFilter: (req, file, callback) => {
        // Verificando o MIME type do arquivo
        if (file.mimetype !== 'application/octet-stream') {
          return callback(new Error('Invalid file type. Only .rem files (octet-stream) are allowed'), false);
        }
        callback(null, true);
      },
    }),
  ],
  controllers: [PaymentController],
  providers: [
    { provide: PaymentRepository, useClass: PrismaPaymentRepository },
    FileUploadService
  ]
})
export class PaymentModule { }