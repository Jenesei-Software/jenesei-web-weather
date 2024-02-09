import {
  IForecastdayCurrent,
  IForecastdayHourCurrent,
  ICurrent,
  getRealtimeResponse,
  ILocation,
} from '@api/weather'

export interface HomeProps {
  IPAddress: string
}

export interface HomeGeneralProps {
  dataGetRealtime: getRealtimeResponse
  dataGetForecastDay: IForecastdayCurrent[]
}

export interface HomeHourlyForecastProps {
  data8GetHoursForecast: IForecastdayHourCurrent[]
}

export interface HomeDayForecastProps {
  dataGetForecastDay: IForecastdayCurrent[]
  dataGetRealtime: getRealtimeResponse
}

export interface HomeAirQualityProps {
  realtimeCurrent: ICurrent
}

export interface HomeMapProps {
  dataGetRealtime: getRealtimeResponse
}

export interface HomeUVIndexProps {
  realtimeCurrent: ICurrent
}
export interface HomeSunriseProps {
  realtimeLocation: ILocation
}
export interface HomeWindProps {
  realtimeCurrent: ICurrent
}
export interface HomeRainfallProps {
  realtimeCurrent: ICurrent
}
export interface HomeFeelsLikeProps {
  realtimeCurrent: ICurrent
}
export interface HomeHumidityProps {
  realtimeCurrent: ICurrent
}
