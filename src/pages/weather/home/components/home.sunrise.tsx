import {
  HomeInfoCardContainer,
  HomeInfoCardContainerBlur,
  HomeInfoCardContainerContent,
  HomeInfoCardContainerContentTitle,
  HomeInfoCardContainerContentLine,
  HomeSunriseProps,
} from '..'
import { IconWeather } from '@assets/icons/icon-weather'
import { StyledInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'

export const HomeSunrise: FC<HomeSunriseProps> = (props) => {
  return (
    <HomeInfoCardContainer>
      <HomeInfoCardContainerContent>
        <HomeInfoCardContainerContentTitle>
          <IconWeather.Sunrise />
          <StyledInterR12>SUNRISE</StyledInterR12>
        </HomeInfoCardContainerContentTitle>
        <HomeInfoCardContainerContentLine />
      </HomeInfoCardContainerContent>
      <HomeInfoCardContainerBlur />
    </HomeInfoCardContainer>
  )
}
