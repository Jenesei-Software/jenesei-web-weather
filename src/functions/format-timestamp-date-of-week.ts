export function formatTimestampDateOfWeek(timestamp: number): string {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const currentDate = new Date()
  currentDate.setHours(0, 0, 0, 0)

  const targetDate = new Date(timestamp * 1000)
  targetDate.setHours(0, 0, 0, 0)

  if (
    currentDate.getFullYear() === targetDate.getFullYear() &&
    currentDate.getMonth() === targetDate.getMonth() &&
    currentDate.getDate() === targetDate.getDate()
  ) {
    return 'Today'
  } else {
    return daysOfWeek[targetDate.getDay()]
  }
}
