import { IsOptional, IsNumber, MaxLength } from 'class-validator'

import { IsNotBlank } from '@/core/decorators/is-not-blank.decorator'
import { MessagesValidations } from '@/core/utils/messages-validations.util'

export class UpdatePaymentDto {
  @MaxLength(15, { message: MessagesValidations.maxLength('name') })
  @IsNotBlank({ message: MessagesValidations.isNotBlank('name') })
  name: string

  @IsNumber()
  @IsOptional()
  age?: number

  @MaxLength(34, { message: MessagesValidations.maxLength('adress') })
  @IsNotBlank({ message: MessagesValidations.isNotBlank('adress') })
  @IsOptional()
  adress?: string

  @MaxLength(11, { message: MessagesValidations.maxLength('cpf') })
  @IsNotBlank({ message: MessagesValidations.isNotBlank('cpf') })
  cpf: string

  @IsNumber()
  amount: number

  @MaxLength(11, { message: MessagesValidations.maxLength('birthdayDate') })
  @IsNotBlank({ message: MessagesValidations.isNotBlank('birthdayDate') })
  @IsOptional()
  birthdayDate?: string
}
