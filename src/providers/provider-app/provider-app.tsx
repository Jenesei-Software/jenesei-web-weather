import { ProviderAppWrapper } from '.'
import { AppContextProps } from './provider-app.types'
import { AppRoutesWeather } from '@core/router'
import { ProviderCity } from '@providers/provider-city'
import { ProviderGeoLocation } from '@providers/provider-geolocation'
import React, { createContext, useContext, useState } from 'react'

export const AppContext = createContext<AppContextProps | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useCity must be used within a ProviderCity')
  }
  return context
}

export const ProviderApp: React.FC = () => {
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
      <ProviderAppWrapper $background={background ? background : `transparent`}>
        <ProviderGeoLocation>
          <ProviderCity>
            <AppRoutesWeather />
          </ProviderCity>
        </ProviderGeoLocation>
      </ProviderAppWrapper>
    </AppContext.Provider>
  )
}
