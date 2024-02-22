import { CurrentAndForecastsWeatherResponse } from '@api/openweathermap'

interface TemperatureData {
  max: number
  min: number
}

export function findMinMaxTemperatures(
  data?: CurrentAndForecastsWeatherResponse['daily']
): TemperatureData | null {
  if (!data || data.length === 0) {
    return null
  }

  const result: TemperatureData = {
    max: Number.NEGATIVE_INFINITY,
    min: Number.POSITIVE_INFINITY,
  }

  for (const item of data) {
    if (item.temp.max > result.max) {
      result.max = item.temp.max
    }

    if (item.temp.min < result.min) {
      result.min = item.temp.min
    }
  }

  return result
}
