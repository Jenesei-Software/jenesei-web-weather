import { getSunriseSunsetRequest, sunriseSunsetApi } from '.'
import { queryKeys } from '@core/query'
import { queryOptions } from '@tanstack/react-query'

export const useGetSunriseSunset = (props: getSunriseSunsetRequest) =>
  queryOptions({
    queryKey: [queryKeys['sunrise-sunset']],
    queryFn: () =>
      sunriseSunsetApi.getSunriseSunset(props).then((res) => res.data),
  })
