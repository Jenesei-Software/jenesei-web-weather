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
  const resultMinMaxTemperatures = findMinMaxTemperatures(props?.data?.daily)
  return (
    <LayoutWidget
      height="430px"
      title={
        <>
          <IconWeather.DayForecast />
          <SpanInterR12>8-DAY FORECAST</SpanInterR12>
        </>
      }
      content={
        <WidgetDayForecastList>
          {props.data &&
            props.data.daily.map((e, id) => (
              <React.Fragment key={id}>
                <WidgetDayForecastListItem key={id}>
                  <WidgetDayForecastListItemDay>
                    <SpanInterM16>
                      {formatTimestampDateOfWeek(e.dt)}
                    </SpanInterM16>
                  </WidgetDayForecastListItemDay>
                  <WidgetDayForecastListItemContainerPicture>
                    <WidgetDayForecastListItemPicture
                      $url={e.weather[0].icon}
                    />
                    {+e.pop.toFixed() > 0 && (
                      <SpanInterSB10 color={theme.color.color.blue[100]}>
                        {(e.pop * 100).toFixed()}
                        {' %'}
                      </SpanInterSB10>
                    )}
                  </WidgetDayForecastListItemContainerPicture>
                  <WidgetDayForecastListItemStyledSpanInterM18
                    color={theme.color.default.white40}
                  >
                    {e.temp.min.toFixed(1)}°
                  </WidgetDayForecastListItemStyledSpanInterM18>
                  {resultMinMaxTemperatures && (
                    <WidgetDayForecastStyledWeatherDifference
                      list={{
                        maxtemp: resultMinMaxTemperatures?.max,
                        mintemp: resultMinMaxTemperatures?.min,
                      }}
                      day={{
                        maxtemp: e.temp.max,
                        mintemp: e.temp.min,
                      }}
                      now={
                        isToday(e.dt)
                          ? {
                              temp: props.data?.current.temp,
                            }
                          : undefined
                      }
                    />
                  )}
                  <WidgetDayForecastListItemStyledSpanInterM18
                    color={theme.color.default.white}
                  >
                    {e.temp.max.toFixed(1)}°
                  </WidgetDayForecastListItemStyledSpanInterM18>
                </WidgetDayForecastListItem>
                {props.data?.daily && id !== props.data?.daily.length - 1 && (
                  <LayoutWidgetContainerLine />
                )}
              </React.Fragment>
            ))}
        </WidgetDayForecastList>
      }
    />
  )
}
