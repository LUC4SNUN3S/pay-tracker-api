
export abstract class PaymentRepository {
  abstract confirmFileData(): Promise<void>
}