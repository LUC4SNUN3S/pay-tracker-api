export abstract class PaymentRepository {
  abstract confirmPayment(): Promise<void>
  abstract getPaymentPaginated(): Promise<void>
  abstract updatePayment(): Promise<void>
  abstract deletePayment(): Promise<void>
}
