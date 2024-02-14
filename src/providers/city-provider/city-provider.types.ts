export interface CityProviderProps {
  children: React.ReactNode
}

export interface City {
  ip: string
  id: number
}

export interface CityContextProps {
  selectedCity: City
  cities: City[]
}
