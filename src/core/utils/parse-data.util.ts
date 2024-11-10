import dayjs from 'dayjs'

export function ValidAndParseDate(date: string): string | null {
  if (dayjs(date).isValid()) {
    return dayjs(date).format('DD-MM-YYYY')
  }
  return null
}
