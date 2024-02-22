import {
  WidgetHourlyForecastProps,
  WidgetHourlyForecastStyledSwiper,
  WidgetHourlyForecastContainerContentListItem,
  WidgetHourlyForecastContainerContentListItemDay,
  WidgetHourlyForecastContainerContentListItemPicture,
  WidgetHourlyForecastContainerContentListItemData,
} from '.'
import { IconWeather } from '@assets/icons/icon-weather'
import { formatTimestampToTime } from '@functions/format-timestamp-date-to-time'
import { hasPlusOrMinus } from '@functions/has-plus-or-minus'
import { LayoutWidget } from '@layouts/layout-widget'
import { SpanInterM16, SpanInterM18, SpanInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'
import { A11y } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'

export const WidgetHourlyForecast: FC<WidgetHourlyForecastProps> = (props) => {
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
        <WidgetHourlyForecastStyledSwiper
          modules={[A11y]}
          pagination={{ clickable: true }}
          slidesPerView={6}
          scrollbar={{ draggable: true }}
          nested
        >
          {props.data &&
            props.data.hourly.map((e, id) => (
              <SwiperSlide key={id}>
                <WidgetHourlyForecastContainerContentListItem key={id}>
                  <WidgetHourlyForecastContainerContentListItemDay>
                    <SpanInterM16>
                      {formatTimestampToTime(e.dt, false)}
                    </SpanInterM16>
                  </WidgetHourlyForecastContainerContentListItemDay>
                  <WidgetHourlyForecastContainerContentListItemPicture
                    $url={e.weather[0].icon}
                  />
                  <WidgetHourlyForecastContainerContentListItemData
                    $hasPlusOrMinus={hasPlusOrMinus(e.temp)}
                  >
                    <SpanInterM18>{e.temp.toFixed(1)}°</SpanInterM18>
                  </WidgetHourlyForecastContainerContentListItemData>
                </WidgetHourlyForecastContainerContentListItem>
              </SwiperSlide>
            ))}
        </WidgetHourlyForecastStyledSwiper>
      }
    />
  )
}
