import { HomeAirQualityTitleContainer, HomeFeelsLikeProps } from '..'
import { IconWeather } from '@assets/icons/icon-weather'
import { LayoutWidget } from '@layouts/layout-widget'
import { SpanInterM20, SpanInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'

export const HomeFeelsLike: FC<HomeFeelsLikeProps> = (props) => {
  return (
    <LayoutWidget
      height="80px"
      title={
        <>
          <IconWeather.FeelsLike />
          <SpanInterR12>FEELS LIKE</SpanInterR12>
        </>
      }
      content={
        props.realtimeCurrent && (
          <HomeAirQualityTitleContainer>
            <SpanInterM20>
              {props.realtimeCurrent.feelslike_c + '°'}
            </SpanInterM20>
          </HomeAirQualityTitleContainer>
        )
      }
    />
  )
}
