import { IsString, IsOptional } from 'class-validator'

export class UpdatePaymentDto {
  @IsString()
  @IsOptional()
  name: string

  @IsString()
  @IsOptional()
  age: string

  @IsString()
  @IsOptional()
  adress: string

  @IsString()
  @IsOptional()
  cpf: string

  @IsString()
  @IsOptional()
  amount: string

  @IsString()
  @IsOptional()
  birthdayDate: string
}
