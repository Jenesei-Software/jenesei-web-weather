import { HomeAirQualityTitleContainer, HomeRainfallProps } from '..'
import { IconWeather } from '@assets/icons/icon-weather'
import { LayoutWidget } from '@layouts/layout-widget'
import { SpanInterM20, SpanInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'

export const HomeRainfall: FC<HomeRainfallProps> = (props) => {
  return (
    <LayoutWidget
      height="94px"
      title={
        <>
          <IconWeather.Rainfall />
          <SpanInterR12>RAINFALL</SpanInterR12>
        </>
      }
      content={
        props.realtimeCurrent && (
          <HomeAirQualityTitleContainer>
            <SpanInterM20>
              {props.realtimeCurrent.precip_mm + ' mm'}
            </SpanInterM20>
          </HomeAirQualityTitleContainer>
        )
      }
    />
  )
}
