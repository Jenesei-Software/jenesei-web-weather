import {
  HomeForecastDayList,
  HomeForecastDayListItem,
  HomeForecastDayListItemDay,
  HomeForecastDayListItemPicture,
  HomeForecastDayListItemContainerPicture,
  HomeForecastDayListItemStyledStyledInterM18,
  HomeDayForecastProps,
  HomeDayForecastStyledWeatherDifferenceFromTheList,
} from '..'
import { IconWeather } from '@assets/icons/icon-weather'
import { findMinMaxTemperatures } from '@functions/find-min-max-temperatures'
import { formatTimestampDateOfWeek } from '@functions/format-timestamp-date-of-week'
import { isToday } from '@functions/is-today'
import { LayoutWidget, LayoutWidgetContainerLine } from '@layouts/layout-widget'
import {
  StyledInterM16,
  StyledInterR12,
  StyledInterSB10,
} from '@styles/fonts/inter'
import { theme } from '@styles/theme'
import React, { FC } from 'react'

export const HomeDayForecast: FC<HomeDayForecastProps> = (props) => {
  const resultMinMaxTemperatures = findMinMaxTemperatures(
    props.dataGetForecastDay
  )
  return (
    <LayoutWidget
      title={
        <>
          <IconWeather.DayForecast />
          <StyledInterR12>3-DAY FORECAST</StyledInterR12>
        </>
      }
      content={
        <HomeForecastDayList>
          {props.dataGetForecastDay.map((e, id) => (
            <React.Fragment key={id}>
              <HomeForecastDayListItem key={id}>
                <HomeForecastDayListItemDay>
                  <StyledInterM16>
                    {formatTimestampDateOfWeek(e.date_epoch)}
                  </StyledInterM16>
                </HomeForecastDayListItemDay>
                <HomeForecastDayListItemContainerPicture>
                  <HomeForecastDayListItemPicture $url={e.day.condition.icon} />
                  {(e.day.daily_chance_of_rain !== 0 ||
                    e.day.daily_chance_of_snow !== 0) && (
                    <StyledInterSB10 color={theme.color.color.blue[100]}>
                      {e.day.daily_chance_of_rain || e.day.daily_chance_of_snow}
                      {' %'}
                    </StyledInterSB10>
                  )}
                </HomeForecastDayListItemContainerPicture>
                <HomeForecastDayListItemStyledStyledInterM18
                  color={theme.color.default.white40}
                >
                  {e.day.mintemp_c}°
                </HomeForecastDayListItemStyledStyledInterM18>
                {resultMinMaxTemperatures && (
                  <HomeDayForecastStyledWeatherDifferenceFromTheList
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
                <HomeForecastDayListItemStyledStyledInterM18
                  color={theme.color.default.white}
                >
                  {e.day.maxtemp_c}°
                </HomeForecastDayListItemStyledStyledInterM18>
              </HomeForecastDayListItem>
              {id !== props.dataGetForecastDay.length - 1 && (
                <LayoutWidgetContainerLine />
              )}
            </React.Fragment>
          ))}
        </HomeForecastDayList>
      }
    />
  )
}
