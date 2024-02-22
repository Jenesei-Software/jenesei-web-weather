import {
  CurrentAndForecastsWeatherRequest,
  CurrentAndForecastsWeatherResponse,
  GeocodingRequest,
  GeocodingResponse,
} from '.'
import { openWeatherMapHostAxiosInstance } from '@api/axios'

export const openWeatherMapApi = {
  getCurrentAndForecastsWeather: (props: CurrentAndForecastsWeatherRequest) =>
    openWeatherMapHostAxiosInstance.get<CurrentAndForecastsWeatherResponse>(
      'data/3.0/onecall',
      {
        params: props.params,
      }
    ),
  getGeocoding: (props: GeocodingRequest) =>
    openWeatherMapHostAxiosInstance.get<GeocodingResponse[]>('geo/1.0/direct', {
      params: props.params,
    }),
}
