import { CurrentAndForecastsWeatherResponse } from '@api/openweathermap'
import { City } from '@providers/city-provider'

export interface WidgetGeneralProps {
  data?: CurrentAndForecastsWeatherResponse
  selectedCity: City
}
