import {
  HomeWrapper,
  HomeProps,
  HomeInfoContainer,
  HomeInfoCardsContainer,
} from '.'
import { useGetForecastDay, useGetRealtime } from '@api/weather'
import { getHoursForecast } from '@functions/get-hours-forecast'
import { CityContext } from '@providers/city-provider'
import { useQuery } from '@tanstack/react-query'
import { WidgetAirQuality } from '@widgets/air-quality'
import { WidgetDayForecast } from '@widgets/day-forecast'
import { WidgetFeelsLike } from '@widgets/feels-like'
import { WidgetGeneral } from '@widgets/general'
import { WidgetHourlyForecast } from '@widgets/hourly-forecast'
import { WidgetHumidity } from '@widgets/humidity'
import { WidgetRainfall } from '@widgets/rainfall'
import { WidgetSunrise } from '@widgets/sunrise'
import { WidgetUVIndex } from '@widgets/uv-Index'
import { WidgetWind } from '@widgets/wind'
import { FC, useContext } from 'react'

export const Home: FC<HomeProps> = () => {
  /****************************************** Other *************************************************/
  const { selectedCity } = useContext(CityContext)

  /****************************************** Query *************************************************/

  const { data: dataGetForecast } = useQuery({
    ...useGetForecastDay({
      params: {
        q: selectedCity.q,
        days: 3,
        aqi: 'yes',
        alerts: 'yes',
      },
    }),
  })

  const { data: dataGetRealtime } = useQuery({
    ...useGetRealtime({
      params: {
        q: selectedCity.q,
      },
    }),
  })

  /****************************************** useEffect *************************************************/

  return (
    <HomeWrapper>
      <WidgetGeneral
        dataGetRealtime={dataGetRealtime}
        dataGetForecastDay={dataGetForecast?.forecast.forecastday}
      />
      <HomeInfoContainer>
        <WidgetHourlyForecast
          data8GetHoursForecast={getHoursForecast(
            dataGetForecast?.forecast.forecastday || [],
            12
          )}
        />
        <WidgetDayForecast
          dataGetRealtime={dataGetRealtime}
          dataGetForecastDay={dataGetForecast?.forecast.forecastday}
        />
        <WidgetAirQuality realtimeCurrent={dataGetForecast?.current} />
        <HomeInfoCardsContainer>
          <WidgetWind realtimeCurrent={dataGetForecast?.current} />
          <WidgetSunrise realtimeLocation={dataGetForecast?.location} />
        </HomeInfoCardsContainer>
        <HomeInfoCardsContainer>
          <WidgetRainfall realtimeCurrent={dataGetForecast?.current} />
          <WidgetUVIndex realtimeCurrent={dataGetForecast?.current} />
        </HomeInfoCardsContainer>
        <HomeInfoCardsContainer>
          <WidgetFeelsLike realtimeCurrent={dataGetForecast?.current} />
          <WidgetHumidity realtimeCurrent={dataGetForecast?.current} />
        </HomeInfoCardsContainer>
      </HomeInfoContainer>
    </HomeWrapper>
  )
}
