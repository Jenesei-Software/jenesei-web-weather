import {
  getAstronomyRequest,
  getAstronomyResponse,
  getForecastRequest,
  getForecastResponse,
  getRealtimeRequest,
  getRealtimeResponse,
} from '.'
import { weatherApiHostAxiosInstance } from '@api/axios'

export const weatherApi = {
  getRealtime: (props: getRealtimeRequest) =>
    weatherApiHostAxiosInstance.get<getRealtimeResponse>('current.json', {
      params: props.params,
    }),
  getForecast: (props: getForecastRequest) =>
    weatherApiHostAxiosInstance.get<getForecastResponse>('forecast.json', {
      params: props.params,
    }),
  getAstronomy: (props: getAstronomyRequest) =>
    weatherApiHostAxiosInstance.get<getAstronomyResponse>('astronomy.json', {
      params: props.params,
    }),
}
