import { OPEN_WEATHER_MAP_LANGUAGES } from '@api/openweathermap'

export interface LanguageProviderProps {
  children: React.ReactNode
}

export interface LanguageContextProps {
  language: OPEN_WEATHER_MAP_LANGUAGES
  changeLanguage: (newLanguage: OPEN_WEATHER_MAP_LANGUAGES) => void
}
