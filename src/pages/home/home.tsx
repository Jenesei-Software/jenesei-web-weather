import {
  HomeWrapper,
  HomeProps,
  HomeInfoContainer,
  HomeInfoCardsContainer,
  StyledSwiper,
  StyledSwiperSlide,
} from '.'
import {
  OPEN_WEATHER_MAP_API_KEY,
  useGetCurrentAndForecastsWeather,
} from '@api/openweathermap'
import { useCity } from '@providers/city-provider'
import { useQuery } from '@tanstack/react-query'
import { WidgetDayForecast } from '@widgets/day-forecast'
import { WidgetFeelsLike } from '@widgets/feels-like'
import { WidgetGeneral } from '@widgets/general'
import { WidgetHourlyForecast } from '@widgets/hourly-forecast'
import { WidgetHumidity } from '@widgets/humidity'
import { WidgetRainfall } from '@widgets/rainfall'
import { WidgetSunrise } from '@widgets/sunrise'
import { WidgetUVIndex } from '@widgets/uv-Index'
import { WidgetWind } from '@widgets/wind'
import { FC } from 'react'
import { Pagination } from 'swiper/modules'

export const Home: FC<HomeProps> = () => {
  /****************************************** Other *************************************************/
  const { selectedCity, cities, setSelectedCity } = useCity()

  /****************************************** Query *************************************************/
  const { data: dataGetCurrentAndForecastsWeather } = useQuery({
    ...useGetCurrentAndForecastsWeather({
      params: {
        appid: OPEN_WEATHER_MAP_API_KEY,
        lat: selectedCity.lan,
        lon: selectedCity.lon,
        units: 'metric',
      },
    }),
  })

  /****************************************** useEffect *************************************************/
  return (
    <StyledSwiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      onTransitionEnd={(event) => {
        setSelectedCity(
          cities.find((_, index) => index === event.activeIndex) || cities[0]
        )
      }}
    >
      {cities &&
        selectedCity &&
        cities.map((_, id) => (
          <StyledSwiperSlide key={id}>
            <HomeWrapper>
              <WidgetGeneral
                selectedCity={selectedCity}
                data={dataGetCurrentAndForecastsWeather}
              />
              <HomeInfoContainer>
                <WidgetHourlyForecast
                  data={dataGetCurrentAndForecastsWeather}
                />
                <WidgetDayForecast data={dataGetCurrentAndForecastsWeather} />
                <HomeInfoCardsContainer>
                  <WidgetWind data={dataGetCurrentAndForecastsWeather} />
                  <WidgetSunrise data={dataGetCurrentAndForecastsWeather} />
                </HomeInfoCardsContainer>
                <HomeInfoCardsContainer>
                  <WidgetRainfall data={dataGetCurrentAndForecastsWeather} />
                  <WidgetUVIndex data={dataGetCurrentAndForecastsWeather} />
                </HomeInfoCardsContainer>
                <HomeInfoCardsContainer>
                  <WidgetFeelsLike data={dataGetCurrentAndForecastsWeather} />
                  <WidgetHumidity data={dataGetCurrentAndForecastsWeather} />
                </HomeInfoCardsContainer>
              </HomeInfoContainer>
            </HomeWrapper>
          </StyledSwiperSlide>
        ))}
    </StyledSwiper>
  )
}
