import { OPEN_WEATHER_MAP_LANGUAGES } from '.'

/***************************************** Current and forecasts weather data API *************************************************/
export interface CurrentAndForecastsWeatherRequest {
  params: {
    lat: number
    lon: number
    appid: string
    units?: 'standard' | 'metric' | 'imperial'
    lang?: OPEN_WEATHER_MAP_LANGUAGES
  }
}

export interface CurrentAndForecastsWeatherResponse {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: {
    dt: number
    sunrise: number
    sunset: number
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind_speed: number
    wind_deg: number
    wind_gust: number
    rain: {
      '1h': number
    }
    snow: {
      '1h': number
    }
    weather: {
      id: number
      main: string
      description: string
      icon: string
    }[]
  }
  minutely: {
    dt: number
    precipitation: number
  }[]
  hourly: {
    dt: number
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind_speed: number
    wind_deg: number
    wind_gust: number
    weather: {
      id: number
      main: string
      description: string
      icon: string
    }[]
    pop: number
  }[]
  daily: {
    dt: number
    sunrise: number
    sunset: number
    moonrise: number
    moonset: number
    moon_phase: number
    summary: string
    temp: {
      day: number
      min: number
      max: number
      night: number
      eve: number
      morn: number
    }
    feels_like: {
      day: number
      night: number
      eve: number
      morn: number
    }
    pressure: number
    humidity: number
    dew_point: number
    wind_speed: number
    wind_deg: number
    wind_gust: number
    weather: [
      {
        id: number
        main: string
        description: string
        icon: string
      },
    ]
    clouds: number
    pop: number
    rain: number
    uvi: number
  }[]

  alerts: {
    sender_name: string
    event: string
    start: number
    end: number
    description: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tags: any[]
  }[]
}

/***************************************** Geocoding API *************************************************/
export interface GeocodingRequest {
  params: {
    q: string
    limit?: string
    appid: string
  }
}

export interface GeocodingResponse {
  name: string
  local_names: {
    [languageCode: string]: string
    ascii: string
    feature_name: string
  }
  lat: number
  lon: number
  country: string
  state?: string
}
