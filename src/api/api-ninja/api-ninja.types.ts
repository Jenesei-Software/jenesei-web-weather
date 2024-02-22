/***************************************** City API *************************************************/
export interface CityRequest {
  params: {
    name?: string
    limit?: number
  }
}

export interface CityResponse {
  name: string
  latitude: number
  longitude: number
  country: string
  population: number
  is_capital: boolean
}
