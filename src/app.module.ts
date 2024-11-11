import { Module } from '@nestjs/common'

import { DatabaseModule } from '@/database/database.module'
import { PaymentModule } from '@/payments/payment.module'

@Module({
  imports: [DatabaseModule, PaymentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
