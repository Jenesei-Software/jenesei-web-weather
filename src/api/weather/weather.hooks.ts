import {
  getAstronomyRequest,
  getForecastRequest,
  getRealtimeRequest,
  weatherApi,
} from '.'
import { queryKeys } from '@core/query'
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

export const useGetAstronomy = (props: getAstronomyRequest) =>
  queryOptions({
    queryKey: [queryKeys.weather.astronomy, props.params.q],
    queryFn: () => weatherApi.getAstronomy(props).then((res) => res.data),
  })
