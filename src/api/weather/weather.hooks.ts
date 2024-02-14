import {
  getAstronomyRequest,
  getForecastRequest,
  getRealtimeRequest,
  weatherApi,
} from '.'
import { queryKeys } from '@core/query'
import { getHoursForecast } from '@functions/get-hours-forecast'
import { queryOptions } from '@tanstack/react-query'

export const useGetRealtime = (props: getRealtimeRequest) =>
  queryOptions({
    queryKey: [queryKeys.weather.realtime, props.params.q],
    queryFn: () => weatherApi.getRealtime(props).then((res) => res.data),
  })

export const useGetForecastDay = (props: getForecastRequest) =>
  queryOptions({
    queryKey: [queryKeys.weather.forecast, props.params.q],
    queryFn: () => weatherApi.getForecast(props).then((res) => res.data),
  })

export const useGetHoursForecast = (
  props: getForecastRequest & { hours: number }
) =>
  queryOptions({
    queryKey: [queryKeys.weather.forecast, props.hours, props.params.q],
    queryFn: () =>
      weatherApi
        .getForecast(props)
        .then((res) =>
          getHoursForecast(res.data.forecast.forecastday, props.hours)
        ),
  })

export const useGetAstronomy = (props: getAstronomyRequest) =>
  queryOptions({
    queryKey: [queryKeys.weather.astronomy, props.params.q],
    queryFn: () => weatherApi.getAstronomy(props).then((res) => res.data),
  })
