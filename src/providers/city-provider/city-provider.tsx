import { City, CityContextProps, CityProviderProps } from '.'
import React, { createContext, useContext, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'

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
  const cities: City[] = [
    { name: 'City1' },
    { name: 'City2' },
    { name: 'City3' },
  ]
  const [selectedCityIndex] = useState<number>(0)
  return (
    <CityContext.Provider
      value={{
        selectedCityIndex,
        cities,
      }}
    >
      {props.children}
    </CityContext.Provider>
  )
}
