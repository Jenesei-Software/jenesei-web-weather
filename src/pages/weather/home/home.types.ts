import {
  IForecastdayCurrent,
  IForecastdayHourCurrent,
  IRealtimeCurrent,
  getRealtimeResponse,
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
  realtimeCurrent: IRealtimeCurrent
}

export interface HomeMapProps {
  dataGetRealtime: getRealtimeResponse
}

export interface HomeUVIndexProps {}
export interface HomeSunriseProps {}
export interface HomeWindProps {}
export interface HomeRainfallProps {}
export interface HomeFeelsLikeProps {}
export interface HomeHumidityProps {}
