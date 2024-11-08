import { Module } from '@nestjs/common'

import { DatabaseModule } from '@/database/database.module'
import { FileUploadModule } from '@/file-upload/file-upload.module'
import { PaymentModule } from '@/payments/payment.module'

@Module({
  imports: [DatabaseModule, PaymentModule, FileUploadModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
