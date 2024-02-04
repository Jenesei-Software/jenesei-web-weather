import {
  HomeInfoCardContainer,
  HomeInfoCardContainerBlur,
  HomeInfoCardContainerContent,
  HomeInfoCardContainerContentTitle,
  HomeInfoCardContainerContentLine,
  HomeRainfallProps,
} from '..'
import { IconWeather } from '@assets/icons/icon-weather'
import { StyledInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'

export const HomeRainfall: FC<HomeRainfallProps> = (props) => {
  return (
    <HomeInfoCardContainer>
      <HomeInfoCardContainerContent>
        <HomeInfoCardContainerContentTitle>
          <IconWeather.Rainfall />
          <StyledInterR12>RAINFALL</StyledInterR12>
        </HomeInfoCardContainerContentTitle>
        <HomeInfoCardContainerContentLine />
      </HomeInfoCardContainerContent>
      <HomeInfoCardContainerBlur />
    </HomeInfoCardContainer>
  )
}
