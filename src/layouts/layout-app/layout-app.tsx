import { LayoutAppWrapper } from '.'
import { AppRoutesWeather } from '@core/router'
import { CityProvider } from '@providers/city-provider'
import React from 'react'

export const LayoutApp: React.FC = () => {
  return (
    <LayoutAppWrapper>
      <CityProvider>
        <AppRoutesWeather />
      </CityProvider>
    </LayoutAppWrapper>
  )
}
