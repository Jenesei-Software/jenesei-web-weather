import {
  GeoLocationContextProps,
  GeoLocationProviderProps,
  LocationIsNotAllowedButton,
  LocationIsNotAllowedTitle,
  LocationIsNotAllowedWrapper,
} from '.'
import { createContext, useState, FC, useEffect, useContext } from 'react'
import { Ripple } from 'react-ripple-click'

const GeoLocationContext = createContext<GeoLocationContextProps | undefined>(
  undefined
)

// Создаем провайдер для контекста
export const GeoLocationProvider: FC<GeoLocationProviderProps> = (props) => {
  const [geoLocation, setGeoLocation] = useState({
    latitude: null as number | null,
    longitude: null as number | null,
  })
  const [locationIsNotAllowed, setLocationIsNotAllowed] = useState(false)

  const getGeoLocation = async () => {
    try {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject)
        }
      )

      setGeoLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
      setLocationIsNotAllowed(false)
    } catch (error) {
      setLocationIsNotAllowed(true)
      console.error('Error getting geo location:', error)
    }
  }

  useEffect(() => {
    getGeoLocation()
  }, [])

  return (
    <GeoLocationContext.Provider
      value={{ locationIsNotAllowed, geoLocation, getGeoLocation }}
    >
      {!locationIsNotAllowed ? (
        props.children
      ) : (
        <LocationIsNotAllowedWrapper>
          <LocationIsNotAllowedTitle>
            You have disabled geolocation
          </LocationIsNotAllowedTitle>
          <LocationIsNotAllowedButton onClick={getGeoLocation}>
            <Ripple />
            Allow
          </LocationIsNotAllowedButton>
        </LocationIsNotAllowedWrapper>
      )}
    </GeoLocationContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGeoLocation = () => {
  const context = useContext(GeoLocationContext)
  if (!context) {
    throw new Error('useGeoLocation must be used within a GeoLocationProvider')
  }
  return context
}
