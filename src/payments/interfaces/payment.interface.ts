export interface IPayment {
  id: string
  name: string
  age: number
  adress: string
  cpf: string
  amount: number
  birthdayDate: string
  paymentBatchId: string
}

export interface IPaymentBatch {
  id: string
  confirmed: boolean
}
