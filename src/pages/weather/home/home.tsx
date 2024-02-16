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
import { useGetForecastDay, useGetRealtime } from '@api/weather'
import { getHoursForecast } from '@functions/get-hours-forecast'
import { CityContext } from '@providers/city-provider'
import { useQuery } from '@tanstack/react-query'
import { FC, useContext } from 'react'

export const Home: FC<HomeProps> = () => {
  /****************************************** Other *************************************************/
  const { selectedCity } = useContext(CityContext)

  /****************************************** Query *************************************************/

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
        <HomeHourlyForecast
          data8GetHoursForecast={getHoursForecast(
            dataGetForecast?.forecast.forecastday || [],
            12
          )}
        />
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
