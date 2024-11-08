import { Injectable } from '@nestjs/common'
import { randomUUID } from 'crypto'
import * as iconv from 'iconv-lite'

import { IPayment } from '@/payments/interfaces/payment.interface'

type ParsedData = IPayment

@Injectable()
export class ProcessFileService {
  async execute(fileBuffer: Buffer): Promise<ParsedData[]> {
    const fileContent = await this.readFile(fileBuffer)
    const parsedData = this.parseContent(fileContent)
    return parsedData
  }

  private async readFile(fileBuffer: Buffer): Promise<string> {
    return iconv.decode(fileBuffer, 'utf16le') // Identificando o arquivo como 'utf16le'
  }

  private splitLines(content: string): string[] {
    return content.split('\n').filter((line) => line.trim() !== '') // Dividindo por linha e filtrando vazios
  }

  private parseContent(content: string): ParsedData[] {
    const lines = this.splitLines(content)
    const parsedData = lines.map((line) => this.parseLine(line))
    return parsedData
  }

  private parseLine(line: string): ParsedData {
    const id = randomUUID()
    const name = line.substring(0, 15).trim()
    const age = line.substring(15, 19).trim()
    const adress = line.substring(19, 53).trim()
    const cpf = line.substring(53, 64).trim()
    const amountPayed = line.substring(64, 80).trim()
    const birthdayDate = line.substring(80, 88).trim()

    return {
      id,
      name,
      age: this.formatField(age, 'age'),
      adress,
      cpf: this.formatField(cpf, 'cpf'),
      amount: Number(this.formatField(amountPayed, 'amount')),
      birthdayDate: this.formatField(birthdayDate, 'birthdayDate'),
    }
  }

  // Função genérica para formatar os campos com valores padrão
  private formatField(value: string, field: string): string | null {
    const formats: { [key: string]: string } = {
      age: '0000',
      cpf: '00000000000',
      amount: '0000000000000000',
      birthdayDate: '00000000',
    }

    return value === formats[field] ? null : value
  }
}
