import { HomeWindProps } from '..'
import {
  HomeWindWrapper,
  HomeWindLine,
  HomeWindArrow,
  HomeWindTitleContainer,
} from './home.wind.styles'
import { IconWeather } from '@assets/icons/icon-weather'
import Arrow from '@assets/pictures/wind/arrow.png'
import Line from '@assets/pictures/wind/line.png'
import { LayoutWidget } from '@layouts/layout-widget'
import {
  StyledInterR12,
  StyledInterR14,
  StyledInterSB20,
} from '@styles/fonts/inter'
import { FC } from 'react'

function convertKmToMps(kilometersPerHour: number): number {
  const conversionFactor = 1000 / 3600

  // Преобразование км/ч в м/с
  const metersPerSecond = kilometersPerHour * conversionFactor

  const roundedMetersPerSecond = Number(metersPerSecond.toFixed(1))

  return roundedMetersPerSecond
}
export const HomeWind: FC<HomeWindProps> = (props) => {
  return (
    <LayoutWidget
      height="min-content"
      width="176px"
      title={
        <>
          <IconWeather.Wind />
          <StyledInterR12>WIND</StyledInterR12>
        </>
      }
      content={
        <HomeWindWrapper>
          <HomeWindLine alt="Wind background" src={Line} />
          <HomeWindArrow
            alt="Wind arrow"
            $transform={props.realtimeCurrent.wind_degree}
            src={Arrow}
          />
          <HomeWindTitleContainer>
            <StyledInterSB20>
              {convertKmToMps(props.realtimeCurrent.wind_kph)}
            </StyledInterSB20>
            <StyledInterR14>m/s</StyledInterR14>
          </HomeWindTitleContainer>
        </HomeWindWrapper>
      }
    />
  )
}
