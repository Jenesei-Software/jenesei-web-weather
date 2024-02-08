import { getSunriseSunsetRequest, getSunriseSunsetResponse } from '.'
import { sunriseSunsetAxiosInstance } from '@api/axios'

export const sunriseSunsetApi = {
  getSunriseSunset: (props: getSunriseSunsetRequest) =>
    sunriseSunsetAxiosInstance.get<getSunriseSunsetResponse>('json', {
      params: props.params,
    }),
}
