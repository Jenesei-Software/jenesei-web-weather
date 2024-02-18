export interface CityProviderProps {
  children: React.ReactNode
}

export interface City {
  q: string
  id: number
}

export interface CityContextProps {
  selectedCity: City
  cities: City[]
}
