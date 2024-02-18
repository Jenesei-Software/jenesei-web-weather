import { IForecastdayCurrent, getRealtimeResponse } from '@api/weather'

export interface WidgetGeneralProps {
  dataGetRealtime?: getRealtimeResponse
  dataGetForecastDay?: IForecastdayCurrent[]
}
