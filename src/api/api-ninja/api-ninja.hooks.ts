import { CityRequest, CityResponse, apiNinjaApi } from '.'
import { CustomHookMutationOptions } from '@api/axios'
import { useMutation } from '@tanstack/react-query'

export const useGetCity = (
  options?: CustomHookMutationOptions<CityResponse[], CityRequest>
) =>
  useMutation({
    mutationFn: (payload) =>
      apiNinjaApi.getCity(payload).then((res) => res.data),
    ...options,
  })
