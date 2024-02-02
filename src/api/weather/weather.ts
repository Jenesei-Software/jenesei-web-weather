import {
  getForecastRequest,
  getForecastResponse,
  getRealtimeRequest,
  getRealtimeResponse,
} from '.'
import { weatherAxiosInstance } from '@api/axios'

export const weatherApi = {
  getRealtime: (props: getRealtimeRequest) =>
    weatherAxiosInstance.get<getRealtimeResponse>('current.json', {
      params: props.params,
    }),
  getForecast: (props: getForecastRequest) =>
    weatherAxiosInstance.get<getForecastResponse>('forecast.json', {
      params: props.params,
    }),
}
