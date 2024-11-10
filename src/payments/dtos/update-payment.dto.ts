import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsNumber, MaxLength } from 'class-validator'

import { IsNotBlank } from '@/core/decorators/is-not-blank.decorator'
import { MessagesValidations } from '@/core/utils/messages-validations.util'

export class UpdatePaymentDto {
  @ApiProperty({
    description: 'Nome do pagador',
    maxLength: 15,
    example: 'João Silva',
  })
  @MaxLength(15, { message: MessagesValidations.maxLength('name') })
  @IsNotBlank({ message: MessagesValidations.isNotBlank('name') })
  name: string

  @ApiProperty({
    description: 'Idade',
    example: 21,
  })
  @IsNumber()
  @IsOptional()
  age?: number

  @ApiProperty({
    description: 'Endereço',
    maxLength: 34,
    example: 'Rua coronel Nunes, num 50, centro',
  })
  @MaxLength(34, { message: MessagesValidations.maxLength('adress') })
  @IsNotBlank({ message: MessagesValidations.isNotBlank('adress') })
  @IsOptional()
  adress?: string

  @ApiProperty({
    description: 'Cpf',
    maxLength: 11,
    example: 77881546875,
  })
  @MaxLength(11, { message: MessagesValidations.maxLength('cpf') })
  @IsNotBlank({ message: MessagesValidations.isNotBlank('cpf') })
  cpf: string

  @ApiProperty({
    description: 'Valor',
    example: 1500,
  })
  @IsNumber()
  amount: number

  @ApiProperty({
    description: 'Data de nascimento',
    maxLength: 11,
    example: '06102003 | 20031006',
  })
  @MaxLength(11, { message: MessagesValidations.maxLength('birthdayDate') })
  @IsNotBlank({ message: MessagesValidations.isNotBlank('birthdayDate') })
  @IsOptional()
  birthdayDate?: string
}
