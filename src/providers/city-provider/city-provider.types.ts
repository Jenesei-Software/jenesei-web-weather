export interface CityProviderProps {
  children: React.ReactNode
}

export interface City {
  name: string
}

export interface CityContextProps {
  selectedCityIndex: number
  cities: City[]
}
