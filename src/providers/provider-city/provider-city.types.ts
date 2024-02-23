export interface ProviderCityProps {
  children: React.ReactNode
}

export interface City {
  name: string
  id: string
  lan: number
  lon: number
}

export interface CityContextProps {
  selectedCity: City
  cities: City[]
  addToLocalStorage: (city: City, index: number) => void
  removeFromLocalStorage: (id: string) => void
  loading: boolean
  setSelectedCity: React.Dispatch<React.SetStateAction<City>>
}
