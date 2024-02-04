import { AirQualityOneFromTheLine } from '@components/air-quality-one-from-the-line'
import { WeatherDifferenceFromTheList } from '@components/weather-difference-from-the-list'
import { StyledInterM18, StyledInterT10 } from '@styles/fonts/inter'
import styled from 'styled-components'
import { Swiper } from 'swiper/react'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
`

export const HomeGeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 34px;
`

export const HomeStyledStyledInterT10 = styled(StyledInterT10)<{
  $hasPlusOrMinus: boolean
}>`
  line-height: 95px;
  /* margin-left: ${(props) => (props.$hasPlusOrMinus ? '-6px' : '0px')}; */
`

export const HomeGeneralTeamsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`
export const HomeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  margin-top: 16px;
  gap: 8px;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    align-content: center;
    flex-flow: column wrap;
    max-height: 70dvh;
  }
`

export const HomeInfoCardContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 46px;
  position: relative;
  padding: 12px;
  box-sizing: border-box;
  max-width: 500px;
`

export const HomeInfoCardContainerBlur = styled.div`
  box-sizing: border-box;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  opacity: 0.7;
  width: 100%;
  min-height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &:before {
    content: '';
    border-radius: 15px;
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0.2);
  }
`

export const HomeInfoCardContainerContent = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  gap: 0px;
`

export const HomeInfoCardContainerContentTitle = styled.div`
  display: flex;
  padding-bottom: 6px;
  align-items: center;
  gap: 6px;
  & span {
    opacity: 0.6;
  }
`

export const HomeInfoCardContainerContentLine = styled.div`
  width: 100%;
  height: 0;
  border: 0.2px solid rgb(255, 255, 255);
  opacity: 0.5;
  box-sizing: border-box;
`

export const HomeInfoCardContainerContentList = styled.div``
export const HomeInfoCardContainerContentListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  width: 36px;
`

export const HomeInfoCardContainerContentListItemDay = styled.div``

export const HomeInfoCardContainerContentListItemPicture = styled.div<{
  $url: string
}>`
  background-image: url(${(props) => props.$url});
  background-size: cover;
  width: 36px;
  height: 36px;
`

export const HomeInfoCardContainerContentListItemData = styled.div<{
  $hasPlusOrMinus: boolean
}>`
  /* margin-left: ${(props) => (props.$hasPlusOrMinus ? '-10px' : '0px')}; */
`

export const HomeStyledSwiper = styled(Swiper)`
  padding-top: 6px;
  width: 100%;
  & .swiper-pagination-bullet-active {
    background: ${(props) => props.theme.color.default.white};
  }
  & .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const HomeForecastDayList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
  gap: 0px;
`

export const HomeForecastDayListItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

export const HomeForecastDayListItemDay = styled.div`
  width: 40px;
  min-width: 40px;
`

export const HomeForecastDayListItemContainerPicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 46px;
`

export const HomeForecastDayListItemPicture = styled.div<{
  $url: string
}>`
  background-image: url(${(props) => props.$url});
  background-size: cover;
  width: 32px;
  height: 30px;
`

export const HomeForecastDayListItemStyledStyledInterM18 = styled(
  StyledInterM18
)`
  width: 40px;
  min-width: 40px;
  max-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HomeAirQualityTitleContainer = styled.div`
  padding-top: 6px;
`

export const HomeAirQualityStyledAirQualityOneFromTheLine = styled(
  AirQualityOneFromTheLine
)`
  margin-top: 10px;
`

export const HomeDayForecastStyledWeatherDifferenceFromTheList = styled(
  WeatherDifferenceFromTheList
)`
  width: 42%;
  @media (max-width: ${(props) => props.theme.size.mobile}) {
    width: 100px;
  }
`

export const MapWrapper = styled.div`
  height: 196px;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 10px;
`
