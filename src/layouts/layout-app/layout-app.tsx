import { LayoutAppWrapper } from '.'
import { AppRoutesWeather } from '@core/router'
import { CityProvider } from '@providers/city-provider'
import { GeoLocationProvider } from '@providers/geolocation-provider'
import React from 'react'

export const LayoutApp: React.FC = () => {
  return (
    <LayoutAppWrapper>
      <GeoLocationProvider>
        <CityProvider>
          <AppRoutesWeather />
        </CityProvider>
      </GeoLocationProvider>
    </LayoutAppWrapper>
  )
}
