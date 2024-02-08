/***************************************** SunriseSunset API *************************************************/
export interface getSunriseSunsetRequest {
  params: {
    lat: string
    lng: string
    date: string
  }
}

export interface getSunriseSunsetResponse {
  results: SunriseSunsetResults
  status: string
}

export interface SunriseSunsetResults {
  date: string
  sunrise: string
  sunset: string
  first_light: string
  last_light: string
  dawn: string
  dusk: string
  solar_noon: string
  golden_hour: string
  day_length: string
  timezone: string
  utc_offset: string
}
