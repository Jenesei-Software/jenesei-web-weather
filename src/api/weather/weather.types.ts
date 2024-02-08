import { WEATHER_LANGUAGES } from '.'

/***************************************** Realtime API *************************************************/
export interface ILocation {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

export interface ICurrent {
  last_updated_epoch: number
  last_updated: Date
  temp_c: number
  temp_f: number
  is_day: number
  condition: {
    text: string
    icon: string
    code: number
  }
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  vis_km: number
  vis_miles: number
  uv: number
  gust_mph: number
  gust_kph: number
  air_quality: {
    co: number
    no2: number
    o3: number
    so2: number
    pm2_5: number
    pm10: number
    'us-epa-index': number
    'gb-defra-index': number
  }
}

export interface IRealtimeForecast {
  forecastday: IRealtimeForecastDay
}

export interface IRealtimeForecastDay {
  date: Date
  date_epoch: number
  day: {
    maxtemp_c: number
    maxtemp_f: number
    mintemp_c: number
    mintemp_f: number
    avgtemp_c: number
    avgtemp_f: number
    maxwind_mph: number
    maxwind_kph: number
    totalprecip_mm: number
    totalprecip_in: number
    avgvis_km: number
    avgvis_miles: number
    avghumidity: number
    daily_will_it_rain: number
    daily_chance_of_rain: number
    daily_will_it_snow: number
    daily_chance_of_snow: number
    condition: {
      text: string
      icon: string
      code: number
    }
    uv: number
  }
  astro: {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: string
    moon_illumination: string
  }
  hour: [
    {
      time_epoch: number
      time: Date
      temp_c: number
      temp_f: number
      is_day: number
      condition: {
        text: string
        icon: string
        code: number
      }
      wind_mph: number
      wind_kph: number
      wind_degree: number
      wind_dir: string
      pressure_mb: number
      pressure_in: number
      precip_mm: number
      precip_in: number
      humidity: number
      cloud: number
      feelslike_c: number
      feelslike_f: number
      windchill_c: number
      windchill_f: number
      heatindex_c: number
      heatindex_f: number
      dewpoint_c: number
      dewpoint_f: number
      will_it_rain: number
      chance_of_rain: number
      will_it_snow: number
      chance_of_snow: number
      vis_km: number
      vis_miles: number
      gust_mph: number
      gust_kph: number
      uv: number
    },
  ]
}

export interface getRealtimeRequest {
  params: {
    q: string
    lang?: WEATHER_LANGUAGES
  }
}

export interface getRealtimeResponse {
  location: ILocation
  current: ICurrent
}

/***************************************** Forecast API *************************************************/

export interface getForecastRequest {
  params: {
    q: string
    days: number
    lang?: WEATHER_LANGUAGES
    dt?: string
    unixdt?: string
    hour?: string
    alerts?: string
    aqi?: string
    tp?: string
  }
}

export interface getForecastResponse {
  location: ILocation
  current: ICurrent
  forecast: { forecastday: IForecastdayCurrent[] }
}

export interface IForecastdayCurrent {
  date: string
  date_epoch: number
  day: {
    maxtemp_c: number
    maxtemp_f: number
    mintemp_c: number
    mintemp_f: number
    avgtemp_c: number
    avgtemp_f: number
    maxwind_mph: number
    maxwind_kph: number
    totalprecip_mm: number
    totalprecip_in: number
    avgvis_km: number
    avgvis_miles: number
    avghumidity: number
    daily_will_it_rain: number
    daily_chance_of_rain: number
    daily_will_it_snow: number
    daily_chance_of_snow: number
    condition: {
      text: string
      icon: string
      code: number
    }
    uv: number
  }
  astro: {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: string
    moon_illumination: string
  }
  hour: IForecastdayHourCurrent[]
}

export interface IForecastdayHourCurrent {
  time_epoch: number
  time: Date
  temp_c: number
  temp_f: number
  is_day: number
  condition: {
    text: string
    icon: string
    code: number
  }
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  windchill_c: number
  windchill_f: number
  heatindex_c: number
  heatindex_f: number
  dewpoint_c: number
  dewpoint_f: number
  will_it_rain: number
  chance_of_rain: number
  will_it_snow: number
  chance_of_snow: number
  vis_km: number
  vis_miles: number
  gust_mph: number
  gust_kph: number
  uv: number
}
/***************************************** Future API *************************************************/
/***************************************** History API *************************************************/
/***************************************** Marine Weather API *************************************************/
/***************************************** Search/Autocomplete API *************************************************/
/***************************************** IP Lookup API *************************************************/
/***************************************** Forecast API *************************************************/
/***************************************** Time Zone API *************************************************/
/***************************************** Astronomy API *************************************************/
export interface getAstronomyRequest {
  params: {
    q: string
    dt: Date
  }
}

export interface getAstronomyResponse {
  location: ILocation
  astronomy: IAstronomy
}

export interface IAstronomy {
  astro: {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: string
    moon_illumination: string
  }
}
