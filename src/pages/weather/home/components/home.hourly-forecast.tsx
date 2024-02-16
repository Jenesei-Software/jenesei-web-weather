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
import { SpanInterM16, SpanInterM18, SpanInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'
import { A11y } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'

export const HomeHourlyForecast: FC<HomeHourlyForecastProps> = (props) => {
  return (
    <LayoutWidget
      height="145px"
      title={
        <>
          <IconWeather.HourlyForecast />
          <SpanInterR12>HOURLY FORECAST</SpanInterR12>
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
          {props.data8GetHoursForecast &&
            props.data8GetHoursForecast.map((e, id) => (
              <SwiperSlide key={id}>
                <HomeInfoCardContainerContentListItem key={id}>
                  <HomeInfoCardContainerContentListItemDay>
                    <SpanInterM16>
                      {formatTimestampToTime(e.time_epoch, false)}
                    </SpanInterM16>
                  </HomeInfoCardContainerContentListItemDay>
                  <HomeInfoCardContainerContentListItemPicture
                    $url={e.condition.icon}
                  />
                  <HomeInfoCardContainerContentListItemData
                    $hasPlusOrMinus={hasPlusOrMinus(e.temp_c)}
                  >
                    <SpanInterM18>{e.temp_c}°</SpanInterM18>
                  </HomeInfoCardContainerContentListItemData>
                </HomeInfoCardContainerContentListItem>
              </SwiperSlide>
            ))}
        </HomeStyledSwiper>
      }
    />
  )
}
