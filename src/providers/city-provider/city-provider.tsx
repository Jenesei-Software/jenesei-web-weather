import {
  City,
  CityContextProps,
  CityProviderProps,
  StyledSwiper,
  StyledSwiperSlide,
} from '.'
import { getIPAddress } from '@api/auth'
import {
  getForecastRequest,
  getRealtimeRequest,
  weatherApi,
} from '@api/weather'
import { queryClient, queryKeys } from '@core/query'
import { useQuery } from '@tanstack/react-query'
import React, { createContext, useState } from 'react'
import { useEffect } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

export const CityContext = createContext<CityContextProps>({
  selectedCity: { ip: '144.34.213.172', id: 2 },
  cities: [],
})

const getForecastDay = async (props: getForecastRequest) => {
  return weatherApi.getForecast(props).then((res) => res.data)
}

const getRealtime = async (props: getRealtimeRequest) => {
  return weatherApi.getRealtime(props).then((res) => res.data)
}

const fetchForecastForCity = async (city: City) => {
  const dataForecastDay = await getForecastDay({
    params: {
      q: city.ip,
      days: 3,
      aqi: 'yes',
      alerts: 'yes',
    },
  })
  const dataRealtime = await getRealtime({
    params: {
      q: city.ip,
    },
  })
  queryClient.setQueryData(
    [queryKeys.weather.forecast, city.ip],
    dataForecastDay
  )
  queryClient.setQueryData([queryKeys.weather.realtime, city.ip], dataRealtime)
}

export const CityProvider: React.FC<CityProviderProps> = (props) => {
  /****************************************** Other *************************************************/
  const [cities, setCities] = useState<City[]>([])
  const [selectedCity, setSelectedCity] = useState<City>(cities[0])
  const [loading, setLoading] = useState(true)

  /****************************************** Query *************************************************/
  const { data: dataIPAddress } = useQuery({
    ...getIPAddress(),
  })
  /****************************************** useEffect *************************************************/
  useEffect(() => {
    if (dataIPAddress) {
      setCities([
        { ip: dataIPAddress?.ip, id: 0 },
        { ip: '206.71.50.230', id: 1 },
        { ip: '144.34.213.172', id: 2 },
      ])
      setSelectedCity({ ip: dataIPAddress?.ip, id: 0 })
    }
  }, [dataIPAddress])

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
        selectedCity,
        cities,
      }}
    >
      {loading == false && (
        <StyledSwiper
          onTransitionEnd={(event) =>
            setSelectedCity(
              cities.find((element) => element.id === event.activeIndex) ||
                cities[0]
            )
          }
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {cities &&
            cities.map((_, id) => (
              <StyledSwiperSlide key={id}>{props.children}</StyledSwiperSlide>
            ))}
        </StyledSwiper>
      )}
    </CityContext.Provider>
  )
}
