import { ApiProperty } from '@nestjs/swagger'

export class PaymentOutputDto {
  @ApiProperty({
    description: 'ID do pagamento',
    example: 'abc123 (UUIDV4)',
  })
  id: string

  @ApiProperty({
    description: 'Nome do pagador',
    example: 'João Silva',
  })
  name: string

  @ApiProperty({
    description: 'Idade do pagador',
    example: 30,
  })
  age: number

  @ApiProperty({
    description: 'Endereço do pagador',
    example: 'Rua das Flores, 123',
  })
  adress: string

  @ApiProperty({
    description: 'CPF do pagador, apenas números',
    example: '12345678901',
  })
  cpf: string

  @ApiProperty({
    description: 'Valor do pagamento',
    example: 1500.75,
  })
  amount: number

  @ApiProperty({
    description: 'Data de nascimento do pagador no formato AAAAMMDD',
    example: '19900101',
  })
  birthdayDate: string

  @ApiProperty({
    description: 'ID do lote de pagamento associado',
    example: 'batch123 (UUIDV4)',
  })
  paymentBatchId: string

  @ApiProperty({
    description: 'Data de criação',
    example: '2024-11-09T05:50:38.784Z',
  })
  createdAt: string
}
