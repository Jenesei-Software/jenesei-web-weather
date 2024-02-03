import {
  HomeInfoCardContainer,
  HomeInfoCardContainerBlur,
  HomeInfoCardContainerContent,
  HomeInfoCardContainerContentTitle,
  HomeInfoCardContainerContentLine,
  HomeAirQualityProps,
  HomeAirQualityTitleContainer,
  HomeAirQualityStyledAirQualityOneFromTheLine,
} from '.'
import { IconWeather } from '@assets/icons/icon-weather'
import { getUsEPAIndexToTitle } from '@functions/get-usEPAIndex-to-title'
import { StyledInterM20, StyledInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'

export const HomeAirQuality: FC<HomeAirQualityProps> = (props) => {
  return (
    <HomeInfoCardContainer>
      <HomeInfoCardContainerContent>
        <HomeInfoCardContainerContentTitle>
          <IconWeather.AirQuality />
          <StyledInterR12>AIR QUALITY</StyledInterR12>
        </HomeInfoCardContainerContentTitle>
        <HomeInfoCardContainerContentLine />
        <HomeAirQualityTitleContainer>
          <StyledInterM20>
            {props.realtimeCurrent.air_quality.pm2_5 +
              ' ' +
              getUsEPAIndexToTitle(
                props.realtimeCurrent.air_quality['us-epa-index']
              )}
          </StyledInterM20>
        </HomeAirQualityTitleContainer>
        <HomeAirQualityStyledAirQualityOneFromTheLine
          pm2_5={props.realtimeCurrent.air_quality.pm2_5}
        />
      </HomeInfoCardContainerContent>
      <HomeInfoCardContainerBlur />
    </HomeInfoCardContainer>
  )
}
