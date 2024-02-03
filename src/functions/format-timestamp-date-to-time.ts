export function formatTimestampToTime(
  timestamp: number,
  isAmericanFormat: boolean
): string {
  const date = new Date(timestamp * 1000) // Преобразование в миллисекунды

  const hours = date.getHours()
  const minutes = date.getMinutes()

  let formattedTime = ''

  if (isAmericanFormat) {
    const period = hours >= 12 ? 'PM' : 'AM'
    const americanHours = hours % 12 || 12 // Преобразование в 12-часовой формат
    formattedTime = `${americanHours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')} ${period}`
  } else {
    formattedTime = `${hours.toString().padStart(2, '0')}`
  }

  return formattedTime
}
