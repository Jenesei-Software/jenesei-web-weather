import {
  HomeWrapper,
  HomeProps,
  HomeInfoContainer,
  HomeInfoCardsContainer,
} from '.'
import {
  HomeAirQuality,
  HomeDayForecast,
  HomeFeelsLike,
  HomeGeneral,
  HomeHourlyForecast,
  HomeHumidity,
  HomeRainfall,
  HomeSunrise,
  HomeUVIndex,
  HomeWind,
} from './components'
import {
  useGetHoursForecast,
  useGetForecastDay,
  useGetRealtime,
} from '@api/weather'
import { useCity } from '@providers/city-provider'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

export const Home: FC<HomeProps> = () => {
  /****************************************** Other *************************************************/
  const { selectedCity } = useCity()
  /****************************************** Query *************************************************/
  const { data: data8GetHoursForecast } = useQuery({
    ...useGetHoursForecast({
      hours: 12,
      params: {
        q: selectedCity.ip,
        days: 3,
        aqi: 'yes',
        alerts: 'yes',
      },
    }),
  })

  const { data: dataGetForecast } = useQuery({
    ...useGetForecastDay({
      params: {
        q: selectedCity.ip,
        days: 3,
        aqi: 'yes',
        alerts: 'yes',
      },
    }),
  })
  const { data: dataGetRealtime } = useQuery({
    ...useGetRealtime({
      params: {
        q: selectedCity.ip,
      },
    }),
  })

  /****************************************** useEffect *************************************************/

  return (
    <HomeWrapper>
      <HomeGeneral
        dataGetRealtime={dataGetRealtime}
        dataGetForecastDay={dataGetForecast?.forecast.forecastday}
      />
      <HomeInfoContainer>
        <HomeHourlyForecast data8GetHoursForecast={data8GetHoursForecast} />
        <HomeDayForecast
          dataGetRealtime={dataGetRealtime}
          dataGetForecastDay={dataGetForecast?.forecast.forecastday}
        />
        <HomeAirQuality realtimeCurrent={dataGetForecast?.current} />
        <HomeInfoCardsContainer>
          <HomeWind realtimeCurrent={dataGetForecast?.current} />
          <HomeSunrise realtimeLocation={dataGetForecast?.location} />
        </HomeInfoCardsContainer>
        <HomeInfoCardsContainer>
          <HomeRainfall realtimeCurrent={dataGetForecast?.current} />
          <HomeUVIndex realtimeCurrent={dataGetForecast?.current} />
        </HomeInfoCardsContainer>
        <HomeInfoCardsContainer>
          <HomeFeelsLike realtimeCurrent={dataGetForecast?.current} />
          <HomeHumidity realtimeCurrent={dataGetForecast?.current} />
        </HomeInfoCardsContainer>
      </HomeInfoContainer>
    </HomeWrapper>
  )
}
