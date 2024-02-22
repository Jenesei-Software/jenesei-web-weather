import { CityRequest, CityResponse } from '.'
import { apiNinjaHostAxiosInstance } from '@api/axios'

export const apiNinjaApi = {
  getCity: (props: CityRequest) =>
    apiNinjaHostAxiosInstance.get<CityResponse[]>('city', {
      params: props.params,
    }),
}
