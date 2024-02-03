import { getTemperatureColor } from './get-temperature-color'

export const getIntermediateColors = (
  $leftTemperature: number,
  $rightTemperature: number
): string => {
  const numIntervals = 4 // Число промежуточных интервалов
  let intermediateColors = ''

  for (let i = 0; i <= numIntervals; i++) {
    const percentage = (i / numIntervals) * 100
    const temperature =
      $leftTemperature +
      ($rightTemperature - $leftTemperature) * (i / numIntervals)
    intermediateColors += `,${getTemperatureColor(temperature)} ${percentage}%`
  }

  return intermediateColors.trim()
}
