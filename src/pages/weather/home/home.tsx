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
  HomeForecastDayList,
  HomeForecastDayListItem,
  HomeForecastDayListItemDay,
  HomeForecastDayListItemPicture,
  HomeForecastDayListItemContainerPicture,
  HomeForecastDayListItemStyledStyledInterM18,
  HomeForecastDayListItemContainerLine,
} from '.'
import {
  WEATHER_LANGUAGES,
  useGetHoursForecast,
  useGetForecastDay,
  useGetRealtime,
} from '@api/weather'
import { formatTimestampDateOfWeek } from '@functions/format-timestamp-date-of-week'
import { formatTimestampToTime } from '@functions/format-timestamp-date-to-time'
import { hasPlusOrMinus } from '@functions/has-plus-or-minus'
import {
  StyledInterM16,
  StyledInterM18,
  StyledInterR12,
  StyledInterR20,
  StyledInterR36,
  StyledInterSB10,
} from '@styles/fonts/inter'
import { theme } from '@styles/theme'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { A11y } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'

export const Home: FC<HomeProps> = (props) => {
  /****************************************** Query *************************************************/
  const { data: data8GetHoursForecast, isPending: isPending8GetHoursForecast } =
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

  const { data: dataGetForecastDay, isPending: isPendingGetForecastDay } =
    useQuery({
      ...useGetForecastDay({
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
    isPendingGetRealtime ||
    isPendingGetForecastDay ||
    isPending8GetHoursForecast

  /****************************************** useEffect *************************************************/

  return (
    !isPending &&
    dataGetRealtime &&
    data8GetHoursForecast &&
    dataGetForecastDay && (
      <HomeWrapper>
        <HomeGeneralContainer>
          <StyledInterR36>{dataGetRealtime?.location.name}</StyledInterR36>
          <HomeStyledStyledInterT10
            $hasPlusOrMinus={hasPlusOrMinus(dataGetRealtime?.current.temp_c)}
          >
            {dataGetRealtime?.current.temp_c}°
          </HomeStyledStyledInterT10>
          <StyledInterR20>
            {dataGetRealtime?.current.condition.text}
          </StyledInterR20>
          <HomeGeneralTeamsContainer>
            <StyledInterM18>
              H: {dataGetForecastDay[0].day.mintemp_c}°
            </StyledInterM18>
            <StyledInterM18>
              L: {dataGetForecastDay[0].day.maxtemp_c}°
            </StyledInterM18>
          </HomeGeneralTeamsContainer>
        </HomeGeneralContainer>
        <HomeInfoContainer>
          <HomeInfoCardContainer>
            <HomeInfoCardContainerContent>
              <HomeInfoCardContainerContentTitle>
                <StyledInterR12>HOURLY FORECAST</StyledInterR12>
              </HomeInfoCardContainerContentTitle>
              <HomeInfoCardContainerContentLine />
              <HomeStyledSwiper
                modules={[A11y]}
                pagination={{ clickable: true }}
                slidesPerView={6}
                scrollbar={{ draggable: true }}
              >
                {data8GetHoursForecast.map((e, id) => (
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
                        <StyledInterM18>{e.temp_c}°</StyledInterM18>
                      </HomeInfoCardContainerContentListItemData>
                    </HomeInfoCardContainerContentListItem>
                  </SwiperSlide>
                ))}
              </HomeStyledSwiper>
            </HomeInfoCardContainerContent>
            <HomeInfoCardContainerBlur />
          </HomeInfoCardContainer>
          <HomeInfoCardContainer>
            <HomeInfoCardContainerContent>
              <HomeInfoCardContainerContentTitle>
                <StyledInterR12>3-DAY FORECAST</StyledInterR12>
              </HomeInfoCardContainerContentTitle>
              <HomeInfoCardContainerContentLine />
              <HomeForecastDayList>
                {dataGetForecastDay.map((e, id) => (
                  <>
                    <HomeForecastDayListItem key={id}>
                      <HomeForecastDayListItemDay>
                        <StyledInterM16>
                          {formatTimestampDateOfWeek(e.date_epoch)}
                        </StyledInterM16>
                      </HomeForecastDayListItemDay>
                      <HomeForecastDayListItemContainerPicture>
                        <HomeForecastDayListItemPicture
                          $url={e.day.condition.icon}
                        />
                        {e.day.avghumidity && (
                          <StyledInterSB10 color={theme.color.color.blue[100]}>
                            {e.day.avghumidity}
                            {' %'}
                          </StyledInterSB10>
                        )}
                      </HomeForecastDayListItemContainerPicture>
                      <HomeForecastDayListItemStyledStyledInterM18
                        color={theme.color.black[40]}
                      >
                        {e.day.maxtemp_c}°
                      </HomeForecastDayListItemStyledStyledInterM18>
                      <HomeForecastDayListItemContainerLine></HomeForecastDayListItemContainerLine>
                      <HomeForecastDayListItemStyledStyledInterM18>
                        {e.day.mintemp_c}°
                      </HomeForecastDayListItemStyledStyledInterM18>
                    </HomeForecastDayListItem>
                    {id !== dataGetForecastDay.length - 1 && (
                      <HomeInfoCardContainerContentLine />
                    )}
                  </>
                ))}
              </HomeForecastDayList>
            </HomeInfoCardContainerContent>
            <HomeInfoCardContainerBlur />
          </HomeInfoCardContainer>
        </HomeInfoContainer>
      </HomeWrapper>
    )
  )
}
