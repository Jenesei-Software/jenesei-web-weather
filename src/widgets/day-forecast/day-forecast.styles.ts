import { WeatherDifference } from '@components/weather-difference'
import { SpanInterM18 } from '@styles/fonts/inter'
import styled from 'styled-components'

export const WidgetDayForecastList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
  gap: 0px;
`

export const WidgetDayForecastListItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

export const WidgetDayForecastListItemDay = styled.div`
  width: 40px;
  min-width: 40px;
`

export const WidgetDayForecastListItemContainerPicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 46px;
`

export const WidgetDayForecastListItemPicture = styled.div<{
  $url: string
}>`
  background-image: ${(props) =>
    `url(https://openweathermap.org/img/wn/${props.$url}.png)`};
  background-size: cover;
  width: 32px;
  height: 26px;
`

export const WidgetDayForecastListItemStyledSpanInterM18 = styled(SpanInterM18)`
  width: 40px;
  min-width: 40px;
  max-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WidgetDayForecastStyledWeatherDifference = styled(
  WeatherDifference
)`
  width: 42%;
  @media (max-width: ${(props) => props.theme.size.mobile}) {
    width: 100px;
  }
`
