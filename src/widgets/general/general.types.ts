import { CurrentAndForecastsWeatherResponse } from '@api/openweathermap'
import { City } from '@providers/provider-city'

export interface WidgetGeneralProps {
  data?: CurrentAndForecastsWeatherResponse
  selectedCity: City
}
