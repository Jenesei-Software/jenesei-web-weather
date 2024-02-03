export function isToday(timestamp: number): boolean {
  const currentDate = new Date()
  currentDate.setHours(0, 0, 0, 0)

  const targetDate = new Date(timestamp * 1000)
  targetDate.setHours(0, 0, 0, 0)

  return (
    currentDate.getFullYear() === targetDate.getFullYear() &&
    currentDate.getMonth() === targetDate.getMonth() &&
    currentDate.getDate() === targetDate.getDate()
  )
}
