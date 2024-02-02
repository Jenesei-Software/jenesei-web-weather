import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000,
    },
  },
})

export const queryKeys = {
  auth: {
    ip: 'authIp',
  },
  weather: {
    forecast: 'weather-forecast',
    realtime: 'weather-realtime',
  },
}
