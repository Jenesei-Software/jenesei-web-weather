import {
  HomeWrapper,
  HomeProps,
  HomeInfoContainer,
  HomeInfoCardsContainer,
  HomeBackground,
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
import { getBackground } from '@functions/get-background'
import { useCity } from '@providers/city-provider'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

export const Home: FC<HomeProps> = () => {
  /****************************************** Other *************************************************/
  const { selectedCity } = useCity()
  /****************************************** Query *************************************************/
  const { data: data8GetHoursForecast, isPending: isPending8GetHoursForecast } =
    useQuery({
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

  const { data: dataGetForecast, isPending: isPendingGetForecastDay } =
    useQuery({
      ...useGetForecastDay({
        params: {
          q: selectedCity.ip,
          days: 3,
          aqi: 'yes',
          alerts: 'yes',
        },
      }),
    })
  const { data: dataGetRealtime, isPending: isPendingGetRealtime } = useQuery({
    ...useGetRealtime({
      params: {
        q: selectedCity.ip,
      },
    }),
  })

  const isPending =
    isPendingGetRealtime ||
    isPendingGetForecastDay ||
    isPending8GetHoursForecast

  /****************************************** useEffect *************************************************/

  return (
    !isPending &&
    dataGetRealtime &&
    data8GetHoursForecast &&
    dataGetForecast && (
      <HomeWrapper>
        <HomeBackground
          $backgroundURL={getBackground(dataGetRealtime.current.condition.text)}
        />
        <HomeGeneral
          dataGetRealtime={dataGetRealtime}
          dataGetForecastDay={dataGetForecast.forecast.forecastday}
        />
        <HomeInfoContainer>
          <HomeHourlyForecast data8GetHoursForecast={data8GetHoursForecast} />
          <HomeDayForecast
            dataGetRealtime={dataGetRealtime}
            dataGetForecastDay={dataGetForecast.forecast.forecastday}
          />
          <HomeAirQuality realtimeCurrent={dataGetForecast.current} />
          {/* <HomeMap dataGetRealtime={dataGetRealtime} /> */}
          <HomeInfoCardsContainer>
            <HomeWind realtimeCurrent={dataGetForecast.current} />
            <HomeSunrise realtimeLocation={dataGetForecast.location} />
          </HomeInfoCardsContainer>
          <HomeInfoCardsContainer>
            <HomeRainfall realtimeCurrent={dataGetForecast.current} />
            <HomeUVIndex realtimeCurrent={dataGetForecast.current} />
          </HomeInfoCardsContainer>
          <HomeInfoCardsContainer>
            <HomeFeelsLike realtimeCurrent={dataGetForecast.current} />
            <HomeHumidity realtimeCurrent={dataGetForecast.current} />
          </HomeInfoCardsContainer>
        </HomeInfoContainer>
      </HomeWrapper>
    )
  )
}
