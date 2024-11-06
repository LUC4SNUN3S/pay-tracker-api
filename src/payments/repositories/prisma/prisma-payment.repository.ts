import { Injectable } from "@nestjs/common";
import { PaymentRepository } from "@/payments/repositories/payments.repository";
import { DatabaseService } from "@/database/database.service";

@Injectable()
export class PrismaPaymentRepository implements PaymentRepository {

  constructor(private readonly databaseService: DatabaseService) { }

  confirmFileData(): Promise<void> {
    throw new Error("Method not implemented.");
  }

}