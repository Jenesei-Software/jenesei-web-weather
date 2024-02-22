import { AppProviderWrapper } from '.'
import { AppContextProps } from './app-provider.types'
import { AppRoutesWeather } from '@core/router'
import { CityProvider } from '@providers/city-provider'
import { GeoLocationProvider } from '@providers/geolocation-provider'
import React, { createContext, useContext, useState } from 'react'

export const AppContext = createContext<AppContextProps | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useCity must be used within a CityProvider')
  }
  return context
}

export const AppProvider: React.FC = () => {
  const [background, setBackground] = useState<string | null>(null)
  const changeBackground = (background: string | null) => {
    setBackground(background)
  }
  return (
    <AppContext.Provider
      value={{
        changeBackground,
      }}
    >
      <AppProviderWrapper $background={background ? background : `transparent`}>
        <GeoLocationProvider>
          <CityProvider>
            <AppRoutesWeather />
          </CityProvider>
        </GeoLocationProvider>
      </AppProviderWrapper>
    </AppContext.Provider>
  )
}
