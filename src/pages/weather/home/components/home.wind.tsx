import { HomeWindProps } from '..'
import {
  HomeWindWrapper,
  HomeWindLine,
  HomeWindArrow,
  HomeWindTitleContainer,
} from './home.wind.styles'
import Arrow from '/wind/arrow.png'
import Line from '/wind/line.png'
import { IconWeather } from '@assets/icons/icon-weather'
import { LayoutWidget } from '@layouts/layout-widget'
import { SpanInterR12, SpanInterR14, SpanInterSB20 } from '@styles/fonts/inter'
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
      height="162px"
      width="176px"
      title={
        <>
          <IconWeather.Wind />
          <SpanInterR12>WIND</SpanInterR12>
        </>
      }
      content={
        props.realtimeCurrent && (
          <HomeWindWrapper>
            <HomeWindLine alt="Wind background" src={Line} />
            <HomeWindArrow
              alt="Wind arrow"
              $transform={props.realtimeCurrent.wind_degree}
              src={Arrow}
            />
            <HomeWindTitleContainer>
              <SpanInterSB20>
                {convertKmToMps(props.realtimeCurrent.wind_kph)}
              </SpanInterSB20>
              <SpanInterR14>m/s</SpanInterR14>
            </HomeWindTitleContainer>
          </HomeWindWrapper>
        )
      }
    />
  )
}
