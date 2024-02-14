import {
  HomeInfoCardContainerContentListItem,
  HomeInfoCardContainerContentListItemDay,
  HomeInfoCardContainerContentListItemPicture,
  HomeInfoCardContainerContentListItemData,
  HomeStyledSwiper,
  HomeHourlyForecastProps,
} from '..'
import { IconWeather } from '@assets/icons/icon-weather'
import { formatTimestampToTime } from '@functions/format-timestamp-date-to-time'
import { hasPlusOrMinus } from '@functions/has-plus-or-minus'
import { LayoutWidget } from '@layouts/layout-widget'
import {
  StyledInterM16,
  StyledInterM18,
  StyledInterR12,
} from '@styles/fonts/inter'
import { FC } from 'react'
import { A11y } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'

export const HomeHourlyForecast: FC<HomeHourlyForecastProps> = (props) => {
  return (
    <LayoutWidget
      title={
        <>
          <IconWeather.HourlyForecast />
          <StyledInterR12>HOURLY FORECAST</StyledInterR12>
        </>
      }
      content={
        <HomeStyledSwiper
          modules={[A11y]}
          pagination={{ clickable: true }}
          slidesPerView={6}
          scrollbar={{ draggable: true }}
          nested
        >
          {props.data8GetHoursForecast.map((e, id) => (
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
      }
    />
  )
}
