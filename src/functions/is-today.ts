import { DateTime } from 'luxon'

export function isToday(timestamp: number, timezone: string): boolean {
  const currentDate = DateTime.now().setZone(timezone).startOf('day')
  const targetDate = DateTime.fromSeconds(timestamp, {
    zone: timezone,
  }).startOf('day')
  return currentDate.equals(targetDate)
}
