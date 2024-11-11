import dayjs from 'dayjs'

export const YEAR_MONTH_DAY_REGEX = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/

export function ValidAndParseDate(date: string): string | null {
  if (dayjs(date).isValid()) {
    return dayjs(date).format('YYYY-MM-DD')
  }

  return null
}
