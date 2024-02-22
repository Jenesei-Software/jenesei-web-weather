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
    ip: 'locationIp',
  },
  openWeatherMap: {
    currentAndForecasts: 'current-and-forecasts',
    geocoding: 'geocoding',
  },
  weather: {
    forecast: 'weather-forecast',
    realtime: 'weather-realtime',
    astronomy: 'weather-astronomy',
  },
}
