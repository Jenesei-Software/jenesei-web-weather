import {
  WidgetDayForecastProps,
  WidgetDayForecastStyledWeatherDifference,
  WidgetDayForecastList,
  WidgetDayForecastListItem,
  WidgetDayForecastListItemContainerPicture,
  WidgetDayForecastListItemDay,
  WidgetDayForecastListItemPicture,
  WidgetDayForecastListItemStyledSpanInterM18,
} from '.'
import { IconWeather } from '@assets/icons/icon-weather'
import { findMinMaxTemperatures } from '@functions/find-min-max-temperatures'
import { formatTimestampDateOfWeek } from '@functions/format-timestamp-date-of-week'
import { isToday } from '@functions/is-today'
import { LayoutWidget, LayoutWidgetContainerLine } from '@layouts/layout-widget'
import { SpanInterM16, SpanInterR12, SpanInterSB10 } from '@styles/fonts/inter'
import { theme } from '@styles/theme'
import React, { FC } from 'react'

export const WidgetDayForecast: FC<WidgetDayForecastProps> = (props) => {
  const resultMinMaxTemperatures = findMinMaxTemperatures(
    props?.dataGetForecastDay
  )
  return (
    <LayoutWidget
      height="192px"
      title={
        <>
          <IconWeather.DayForecast />
          <SpanInterR12>3-DAY FORECAST</SpanInterR12>
        </>
      }
      content={
        <WidgetDayForecastList>
          {props.dataGetForecastDay &&
            props.dataGetForecastDay.map((e, id) => (
              <React.Fragment key={id}>
                <WidgetDayForecastListItem key={id}>
                  <WidgetDayForecastListItemDay>
                    <SpanInterM16>
                      {formatTimestampDateOfWeek(e.date_epoch)}
                    </SpanInterM16>
                  </WidgetDayForecastListItemDay>
                  <WidgetDayForecastListItemContainerPicture>
                    <WidgetDayForecastListItemPicture
                      $url={e.day.condition.icon}
                    />
                    {(e.day.daily_chance_of_rain !== 0 ||
                      e.day.daily_chance_of_snow !== 0) && (
                      <SpanInterSB10 color={theme.color.color.blue[100]}>
                        {e.day.daily_chance_of_rain ||
                          e.day.daily_chance_of_snow}
                        {' %'}
                      </SpanInterSB10>
                    )}
                  </WidgetDayForecastListItemContainerPicture>
                  <WidgetDayForecastListItemStyledSpanInterM18
                    color={theme.color.default.white40}
                  >
                    {e.day.mintemp_c}°
                  </WidgetDayForecastListItemStyledSpanInterM18>
                  {props.dataGetRealtime && resultMinMaxTemperatures && (
                    <WidgetDayForecastStyledWeatherDifference
                      list={{
                        maxtemp: resultMinMaxTemperatures?.maxtemp_c,
                        mintemp: resultMinMaxTemperatures?.mintemp_c,
                      }}
                      day={{
                        maxtemp: e.day.maxtemp_c,
                        mintemp: e.day.mintemp_c,
                      }}
                      now={
                        isToday(e.date_epoch)
                          ? {
                              temp: props.dataGetRealtime.current.temp_c,
                            }
                          : undefined
                      }
                    />
                  )}
                  <WidgetDayForecastListItemStyledSpanInterM18
                    color={theme.color.default.white}
                  >
                    {e.day.maxtemp_c}°
                  </WidgetDayForecastListItemStyledSpanInterM18>
                </WidgetDayForecastListItem>
                {props.dataGetForecastDay &&
                  id !== props.dataGetForecastDay.length - 1 && (
                    <LayoutWidgetContainerLine />
                  )}
              </React.Fragment>
            ))}
        </WidgetDayForecastList>
      }
    />
  )
}
