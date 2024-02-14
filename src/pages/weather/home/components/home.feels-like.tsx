import { HomeAirQualityTitleContainer, HomeFeelsLikeProps } from '..'
import { IconWeather } from '@assets/icons/icon-weather'
import { LayoutWidget } from '@layouts/layout-widget'
import { StyledInterM20, StyledInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'

export const HomeFeelsLike: FC<HomeFeelsLikeProps> = (props) => {
  return (
    <LayoutWidget
      height="80px"
      title={
        <>
          <IconWeather.FeelsLike />
          <StyledInterR12>FEELS LIKE</StyledInterR12>
        </>
      }
      content={
        props.realtimeCurrent && (
          <HomeAirQualityTitleContainer>
            <StyledInterM20>
              {props.realtimeCurrent.feelslike_c + '°'}
            </StyledInterM20>
          </HomeAirQualityTitleContainer>
        )
      }
    />
  )
}
