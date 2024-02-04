import {
  HomeInfoCardContainer,
  HomeInfoCardContainerBlur,
  HomeInfoCardContainerContent,
  HomeInfoCardContainerContentTitle,
  HomeInfoCardContainerContentLine,
  HomeUVIndexProps,
} from '..'
import { IconWeather } from '@assets/icons/icon-weather'
import { StyledInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'

export const HomeUVIndex: FC<HomeUVIndexProps> = (props) => {
  return (
    <HomeInfoCardContainer>
      <HomeInfoCardContainerContent>
        <HomeInfoCardContainerContentTitle>
          <IconWeather.UVIndex />
          <StyledInterR12>UV INDEX</StyledInterR12>
        </HomeInfoCardContainerContentTitle>
        <HomeInfoCardContainerContentLine />
      </HomeInfoCardContainerContent>
      <HomeInfoCardContainerBlur />
    </HomeInfoCardContainer>
  )
}
