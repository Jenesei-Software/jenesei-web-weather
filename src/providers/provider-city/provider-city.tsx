import {
  CITY_LOCAL_STORAGE,
  City,
  CityContextProps,
  ProviderCityProps,
  MY_LOCATION,
} from '.'
import {
  CurrentAndForecastsWeatherRequest,
  OPEN_WEATHER_MAP_API_KEY,
  openWeatherMapApi,
} from '@api/openweathermap'
import { Menu } from '@components/menu'
import { queryClient, queryKeys } from '@core/query'
import { useGeoLocation } from '@providers/provider-geolocation'
import React, { createContext, useState, useContext, useCallback } from 'react'
import { useEffect } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'

export const CityContext = createContext<CityContextProps | undefined>(
  undefined
)

// eslint-disable-next-line react-refresh/only-export-components
export const useCity = () => {
  const context = useContext(CityContext)
  if (!context) {
    throw new Error('useCity must be used within a ProviderCity')
  }
  return context
}

const getCurrentAndForecastsWeather = async (
  props: CurrentAndForecastsWeatherRequest
) => {
  return openWeatherMapApi
    .getCurrentAndForecastsWeather(props)
    .then((res) => res.data)
}

const fetchForecastForCity = async (city: City) => {
  const dataForecastDay = await getCurrentAndForecastsWeather({
    params: {
      appid: OPEN_WEATHER_MAP_API_KEY,
      lat: city.lan,
      lon: city.lon,
      units: 'metric',
    },
  })
  queryClient.setQueryData(
    [queryKeys.openWeatherMap.currentAndForecasts, city.lan, city.lon],
    dataForecastDay
  )
}

export const ProviderCity: React.FC<ProviderCityProps> = (props) => {
  /****************************************** Other *************************************************/
  const [cities, setCities] = useState<City[]>([])
  const [selectedCity, setSelectedCity] = useState<City>(cities[0])
  const [loading, setLoading] = useState(true)
  const { geoLocation } = useGeoLocation()

  /****************************************** useCallback *************************************************/
  const addToLocalStorage = useCallback(
    (city: City, index: number) => {
      const updatedCities = [...cities]
      updatedCities.splice(index, 0, city)
      setCities(updatedCities)
      localStorage.setItem(CITY_LOCAL_STORAGE, JSON.stringify(updatedCities))
    },
    [cities]
  )

  const removeFromLocalStorage = useCallback(
    (id: string) => {
      const updatedCities = cities.filter((city) => city.id !== id)
      setCities(updatedCities)
      localStorage.setItem(CITY_LOCAL_STORAGE, JSON.stringify(updatedCities))
    },
    [cities]
  )

  /****************************************** useEffect *************************************************/
  useEffect(() => {
    const storedCities = JSON.parse(
      localStorage.getItem(CITY_LOCAL_STORAGE) || '[]'
    )
    if (geoLocation.latitude && geoLocation.longitude) {
      const geoLocationCity = {
        name: MY_LOCATION.name,
        id: MY_LOCATION.id,
        lan: geoLocation.latitude,
        lon: geoLocation.longitude,
      }
      storedCities.map((e: { id: string }) =>
        e.id == 'location' ? geoLocationCity : e
      )
      setCities(storedCities.length == 0 ? [geoLocationCity] : storedCities)
      setSelectedCity(geoLocationCity)
    }
  }, [geoLocation])

  useEffect(() => {
    const fetchCityData = async () => {
      if (cities.length > 0) {
        await Promise.all(cities.map((city) => fetchForecastForCity(city)))
        setLoading(false)
      }
    }

    fetchCityData()
  }, [cities])
  return (
    <CityContext.Provider
      value={{
        addToLocalStorage,
        removeFromLocalStorage,
        selectedCity,
        cities,
        loading,
        setSelectedCity,
      }}
    >
      {!loading && cities && selectedCity && props.children}
      <Menu />
    </CityContext.Provider>
  )
}
