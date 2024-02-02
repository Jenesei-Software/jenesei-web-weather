import { getIPAddressResponse } from './auth.types'
import { ipAxiosInstance } from '@api/axios'

export const authApi = {
  getIPAddress: () =>
    ipAxiosInstance.get<getIPAddressResponse>('', {
      params: { format: 'json' },
    }),
}
