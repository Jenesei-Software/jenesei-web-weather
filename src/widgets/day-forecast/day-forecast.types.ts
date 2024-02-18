import { IForecastdayCurrent, getRealtimeResponse } from '@api/weather'

export interface WidgetDayForecastProps {
  dataGetForecastDay?: IForecastdayCurrent[]
  dataGetRealtime?: getRealtimeResponse
}
