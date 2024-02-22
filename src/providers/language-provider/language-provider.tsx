import {
  LANGUAGE_LOCAL_STORAGE,
  LanguageContextProps,
  LanguageProviderProps,
} from '.'
import { OPEN_WEATHER_MAP_LANGUAGES } from '@api/openweathermap'
import { createContext, useEffect, useState } from 'react'

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
)

export const LanguageProvider: React.FC<LanguageProviderProps> = (props) => {
  const [language, setLanguage] = useState<OPEN_WEATHER_MAP_LANGUAGES>(() => {
    const storedLanguage = localStorage.getItem(LANGUAGE_LOCAL_STORAGE)
    return storedLanguage
      ? (storedLanguage as OPEN_WEATHER_MAP_LANGUAGES)
      : OPEN_WEATHER_MAP_LANGUAGES.en
  })

  useEffect(() => {
    localStorage.setItem(LANGUAGE_LOCAL_STORAGE, language)
  }, [language])

  const changeLanguage = (newLanguage: OPEN_WEATHER_MAP_LANGUAGES) => {
    setLanguage(newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  )
}
