export function formatTimestampDateOfWeek(timestamp: number): string {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const currentDate = new Date()
  const targetDate = new Date(timestamp * 1000)

  if (
    currentDate.getUTCFullYear() === targetDate.getUTCFullYear() &&
    currentDate.getUTCMonth() === targetDate.getUTCMonth() &&
    currentDate.getUTCDate() === targetDate.getUTCDate()
  ) {
    return 'Today'
  } else {
    return daysOfWeek[targetDate.getUTCDay()]
  }
}
