import { getForecastRequest, getRealtimeRequest, weatherApi } from '.'
import { queryKeys } from '@core/query'
import { getHoursForecast } from '@functions/get-hours-forecast'
import { queryOptions } from '@tanstack/react-query'

export const useGetRealtime = (props: getRealtimeRequest) =>
  queryOptions({
    queryKey: [queryKeys.weather.realtime],
    queryFn: () => weatherApi.getRealtime(props).then((res) => res.data),
  })

export const useGetForecast = (props: getForecastRequest) =>
  queryOptions({
    queryKey: [queryKeys.weather.forecast],
    queryFn: () => weatherApi.getForecast(props).then((res) => res.data),
  })

export const useGetHoursForecast = (
  props: getForecastRequest & { hours: number }
) =>
  queryOptions({
    queryKey: [queryKeys.weather.forecast, props.hours],
    queryFn: () =>
      weatherApi
        .getForecast(props)
        .then((res) =>
          getHoursForecast(res.data.forecast.forecastday, props.hours)
        ),
  })
