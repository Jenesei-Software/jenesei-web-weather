import {
  City,
  CityContextProps,
  CityProviderProps,
  StyledSwiper,
  StyledSwiperSlide,
} from '.'
import { getIPAddress } from '@api/auth'
import { useQuery } from '@tanstack/react-query'
import React, { createContext, useContext, useState } from 'react'
import { useEffect } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const CityContext = createContext<CityContextProps | null>(null)

// eslint-disable-next-line react-refresh/only-export-components
export const useCity = () => {
  const context = useContext(CityContext)
  if (!context) {
    throw new Error('useCity must be used within a CityProvider')
  }
  return context
}

export const CityProvider: React.FC<CityProviderProps> = (props) => {
  /****************************************** Other *************************************************/
  const [cities, setCities] = useState<City[]>([])
  const [selectedCity, setSelectedCity] = useState<City>(cities[0])

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
  return (
    <CityContext.Provider
      value={{
        selectedCity,
        cities,
      }}
    >
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
          cities.map((e, id) => (
            <StyledSwiperSlide key={id}>{props.children}</StyledSwiperSlide>
          ))}
      </StyledSwiper>
    </CityContext.Provider>
  )
}
