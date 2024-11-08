import dayjs from 'dayjs'

export function validAndParseDate(date: string) {
  if (dayjs(date).isValid()) {
    return dayjs(date).format('YYYY-MM-DD')
  }
  return null
}
