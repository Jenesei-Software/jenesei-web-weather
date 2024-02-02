import { authApi } from './auth'
import { queryKeys } from '@core/query'
import { queryOptions } from '@tanstack/react-query'

export const getIPAddress = () =>
  queryOptions({
    queryKey: [queryKeys.auth.ip],
    queryFn: () => authApi.getIPAddress().then((res) => res.data),
  })
