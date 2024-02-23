import { OPEN_WEATHER_MAP_LANGUAGES } from '@api/openweathermap'

export interface ProviderLanguageProps {
  children: React.ReactNode
}

export interface LanguageContextProps {
  language: OPEN_WEATHER_MAP_LANGUAGES
  changeLanguage: (newLanguage: OPEN_WEATHER_MAP_LANGUAGES) => void
}
