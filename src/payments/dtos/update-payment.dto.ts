import { ApiProperty } from '@nestjs/swagger'
import {
  IsOptional,
  IsNumber,
  MaxLength,
  Matches,
  IsDateString,
  IsString,
} from 'class-validator'

import { IsNotBlank } from '@/core/decorators/is-not-blank.decorator'
import { REGEX_MASK_CPF } from '@/core/utils/format-cpf.util'
import { MessagesValidations } from '@/core/utils/messages-validations.util'
import { YEAR_MONTH_DAY_REGEX } from '@/core/utils/parse-data.util'

export class UpdatePaymentDto {
  @ApiProperty({
    description: 'Nome do pagador',
    maxLength: 15,
    example: 'João Silva',
  })
  @MaxLength(15, { message: MessagesValidations.maxLength('nome') })
  @IsNotBlank({ message: MessagesValidations.isNotBlank('nome') })
  @IsString({ message: MessagesValidations.string('nome') })
  name: string

  @ApiProperty({
    description: 'Idade',
    example: 21,
  })
  @IsNumber({}, { message: MessagesValidations.number('idade') })
  @IsOptional()
  age?: number

  @ApiProperty({
    description: 'Endereço',
    maxLength: 34,
    example: 'Rua coronel Nunes, num 50, centro',
  })
  @MaxLength(34, { message: MessagesValidations.maxLength('endereço') })
  @IsOptional()
  adress?: string

  @ApiProperty({
    description: 'Cpf',
    maxLength: 11,
    example: '123-456-789-00',
  })
  @Matches(REGEX_MASK_CPF, {
    message: MessagesValidations.fieldFormat('CPF', '123.456.789-00'),
  })
  @MaxLength(14, { message: MessagesValidations.maxLength('cpf') })
  @IsNotBlank({ message: MessagesValidations.isNotBlank('cpf') })
  cpf: string

  @ApiProperty({
    description: 'Valor',
    example: 1500,
  })
  @IsNumber({}, { message: MessagesValidations.number('valor') })
  amount: number

  @ApiProperty({
    description: 'Data de nascimento',
    maxLength: 11,
    example: '2000-12-03',
  })
  @Matches(YEAR_MONTH_DAY_REGEX, {
    message: MessagesValidations.fieldFormat(
      'data de nascimento',
      'YYYY-MM-DD',
    ),
  })
  @IsDateString(
    {},
    {
      message: MessagesValidations.fieldFormat(
        ' data de nascimento',
        'YYYY-MM-DD',
      ),
    },
  )
  @MaxLength(11, {
    message: MessagesValidations.maxLength('Data de nascimento'),
  })
  @IsOptional()
  birthdayDate?: string
}
