import { HomeAirQualityTitleContainer, HomeRainfallProps } from '..'
import { IconWeather } from '@assets/icons/icon-weather'
import { LayoutWidget } from '@layouts/layout-widget'
import { StyledInterM20, StyledInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'

export const HomeRainfall: FC<HomeRainfallProps> = (props) => {
  return (
    <LayoutWidget
      height="94px"
      title={
        <>
          <IconWeather.Rainfall />
          <StyledInterR12>RAINFALL</StyledInterR12>
        </>
      }
      content={
        props.realtimeCurrent && (
          <HomeAirQualityTitleContainer>
            <StyledInterM20>
              {props.realtimeCurrent.precip_mm + ' mm'}
            </StyledInterM20>
          </HomeAirQualityTitleContainer>
        )
      }
    />
  )
}
