import {
  HomeWrapper,
  HomeProps,
  HomeGeneralContainer,
  HomeStyledStyledInterT10,
  HomeGeneralTeamsContainer,
  HomeInfoContainer,
  HomeInfoCardContainer,
  HomeInfoCardContainerBlur,
  HomeInfoCardContainerContent,
  HomeInfoCardContainerContentTitle,
  HomeInfoCardContainerContentLine,
  HomeInfoCardContainerContentListItem,
  HomeInfoCardContainerContentListItemDay,
  HomeInfoCardContainerContentListItemPicture,
  HomeInfoCardContainerContentListItemData,
  HomeStyledSwiper,
} from '.'
import {
  WEATHER_LANGUAGES,
  useGetHoursForecast,
  useGetForecast,
  useGetRealtime,
} from '@api/weather'
import { formatTimestampToTime } from '@functions/format-timestamp-date-to-time'
import { hasPlusOrMinus } from '@functions/has-plus-or-minus'
import {
  StyledInterM16,
  StyledInterM20,
  StyledInterM22,
  StyledInterR16,
  StyledInterR24,
  StyledInterR36,
} from '@styles/fonts/inter'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { A11y } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'

export const Home: FC<HomeProps> = (props) => {
  /****************************************** Query *************************************************/
  const { data: data8HoursForecast, isPending: isPending8HoursForecast } =
    useQuery({
      ...useGetHoursForecast({
        hours: 8,
        params: {
          q: props.IPAddress,
          days: 3,
          lang: WEATHER_LANGUAGES.ru,
          aqi: 'yes',
          alerts: 'yes',
        },
      }),
    })

  const { data: dataGetForecast, isPending: isPendingGetForecast } = useQuery({
    ...useGetForecast({
      params: {
        q: props.IPAddress,
        days: 3,
        lang: WEATHER_LANGUAGES.ru,
        aqi: 'yes',
        alerts: 'yes',
      },
    }),
  })

  const { data: dataGetRealtime, isPending: isPendingGetRealtime } = useQuery({
    ...useGetRealtime({
      params: {
        q: props.IPAddress,
        lang: WEATHER_LANGUAGES.ru,
      },
    }),
  })

  const isPending =
    isPendingGetRealtime || isPendingGetForecast || isPending8HoursForecast

  /****************************************** useEffect *************************************************/

  return (
    !isPending &&
    dataGetRealtime &&
    data8HoursForecast && (
      <HomeWrapper>
        <HomeGeneralContainer>
          <StyledInterR36>{dataGetRealtime?.location.name}</StyledInterR36>
          <HomeStyledStyledInterT10
            $hasPlusOrMinus={hasPlusOrMinus(dataGetRealtime?.current.temp_c)}
          >
            {dataGetRealtime?.current.temp_c}
          </HomeStyledStyledInterT10>
          <StyledInterR24>
            {dataGetRealtime?.current.condition.text}
          </StyledInterR24>
          <HomeGeneralTeamsContainer>
            <StyledInterM20>
              {dataGetForecast?.forecast.forecastday[0].day.mintemp_c}
            </StyledInterM20>
            <StyledInterM20>
              {dataGetForecast?.forecast.forecastday[0].day.maxtemp_c}
            </StyledInterM20>
          </HomeGeneralTeamsContainer>
        </HomeGeneralContainer>
        <HomeInfoContainer>
          <HomeInfoCardContainer>
            <HomeInfoCardContainerContent>
              <HomeInfoCardContainerContentTitle>
                <StyledInterR16>Почасовая погода </StyledInterR16>
              </HomeInfoCardContainerContentTitle>
              <HomeInfoCardContainerContentLine />
              <HomeStyledSwiper
                modules={[A11y]}
                pagination={{ clickable: true }}
                slidesPerView={6}
                scrollbar={{ draggable: true }}
              >
                {data8HoursForecast.map((e, id) => (
                  <SwiperSlide key={id}>
                    <HomeInfoCardContainerContentListItem key={id}>
                      <HomeInfoCardContainerContentListItemDay>
                        <StyledInterM16>
                          {formatTimestampToTime(e.time_epoch, false)}
                        </StyledInterM16>
                      </HomeInfoCardContainerContentListItemDay>
                      <HomeInfoCardContainerContentListItemPicture
                        $url={e.condition.icon}
                      />
                      <HomeInfoCardContainerContentListItemData
                        $hasPlusOrMinus={hasPlusOrMinus(e.temp_c)}
                      >
                        <StyledInterM22>{e.temp_c}</StyledInterM22>
                      </HomeInfoCardContainerContentListItemData>
                    </HomeInfoCardContainerContentListItem>
                  </SwiperSlide>
                ))}
              </HomeStyledSwiper>
            </HomeInfoCardContainerContent>
            <HomeInfoCardContainerBlur />
          </HomeInfoCardContainer>
        </HomeInfoContainer>
      </HomeWrapper>
    )
  )
}
