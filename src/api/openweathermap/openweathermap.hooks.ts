import {
  CurrentAndForecastsWeatherRequest,
  GeocodingRequest,
  GeocodingResponse,
  openWeatherMapApi,
} from '.'
import { CustomHookMutationOptions } from '@api/axios'
import { queryKeys } from '@core/query'
import { queryOptions, useMutation } from '@tanstack/react-query'

export const useGetCurrentAndForecastsWeather = (
  props: CurrentAndForecastsWeatherRequest
) =>
  queryOptions({
    queryKey: [
      queryKeys.openWeatherMap.currentAndForecasts,
      props.params.lat,
      props.params.lon,
    ],
    queryFn: () =>
      openWeatherMapApi
        .getCurrentAndForecastsWeather(props)
        .then((res) => res.data),
  })

export const useGetGeocoding = (
  options?: CustomHookMutationOptions<GeocodingResponse[], GeocodingRequest>
) =>
  useMutation({
    mutationFn: (payload) =>
      openWeatherMapApi.getGeocoding(payload).then((res) => res.data),
    ...options,
  })
