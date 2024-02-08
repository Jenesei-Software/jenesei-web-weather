import { HomeAirQualityTitleContainer, HomeHumidityProps } from '..'
import { IconWeather } from '@assets/icons/icon-weather'
import { LayoutWidget } from '@layouts/layout-widget'
import { StyledInterM20, StyledInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'

export const HomeHumidity: FC<HomeHumidityProps> = (props) => {
  return (
    <LayoutWidget
      title={
        <>
          <IconWeather.Humidity />
          <StyledInterR12>HUMIDITY</StyledInterR12>
        </>
      }
      content={
        <HomeAirQualityTitleContainer>
          <StyledInterM20>
            {props.realtimeCurrent.humidity + ' %'}
          </StyledInterM20>
        </HomeAirQualityTitleContainer>
      }
    />
  )
}