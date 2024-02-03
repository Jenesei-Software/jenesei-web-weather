import { IForecastdayCurrent } from '@api/weather'

interface TemperatureData {
  maxtemp_c: number
  mintemp_c: number
}

export function findMinMaxTemperatures(
  data: IForecastdayCurrent[]
): TemperatureData | null {
  if (!data || data.length === 0) {
    return null
  }

  const result: TemperatureData = {
    maxtemp_c: Number.NEGATIVE_INFINITY,
    mintemp_c: Number.POSITIVE_INFINITY,
  }

  for (const item of data) {
    if (item.day.maxtemp_c > result.maxtemp_c) {
      result.maxtemp_c = item.day.maxtemp_c
    }

    if (item.day.mintemp_c < result.mintemp_c) {
      result.mintemp_c = item.day.mintemp_c
    }
  }

  return result
}
