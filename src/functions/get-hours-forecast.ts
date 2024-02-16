import { IForecastdayCurrent, IForecastdayHourCurrent } from '@api/weather'

export function getHoursForecast(
  forecastdaytList: IForecastdayCurrent[],
  hours: number
): IForecastdayHourCurrent[] {
  if (forecastdaytList.length == 0) return []
  const currentDate = new Date()
  const currentHour = currentDate.getHours()

  // Функция для фильтрации прогноза по часам
  const filterForecastByHour = (forecast: IForecastdayCurrent) =>
    forecast?.hour.filter(
      (_, id) => id >= currentHour && id <= currentHour + hours - 1
    )

  // Фильтруем прогноз для текущего дня
  const result = filterForecastByHour(forecastdaytList[0])

  // Если не хватает данных в текущем дне, добавляем из следующего дня
  if (result.length < hours && forecastdaytList.length > 1) {
    const remainingHours = hours - result.length
    const additionalForecast = forecastdaytList[1].hour.slice(0, remainingHours)
    result.push(...additionalForecast)
  }

  return result
}
