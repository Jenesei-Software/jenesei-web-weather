import { PointRelativeToLine } from '@components/point-relative-to-line'
import { WeatherDifferenceFromTheList } from '@components/weather-difference-from-the-list'
import {
  FontInterB14,
  StyledInterM18,
  StyledInterT10,
} from '@styles/fonts/inter'
import styled from 'styled-components'
import { Swiper } from 'swiper/react'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  position: relative;
  min-height: 100dvh;
`
export const HomeBackground = styled.div<{ $backgroundURL: string }>`
  background-image: url(${(props) => props.$backgroundURL});
  background-position: center;
  background-size: cover;
  height: 100dvh;
  width: 100dvw;
  background-color: ${(props) => props.theme.color.product['100']};
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: -1;
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

export const HomeInfoCardsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: stretch;
  max-width: 500px;
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
}>``

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

export const HomeAirQualityStyledPointRelativeToLine = styled(
  PointRelativeToLine
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
  border-radius: 10px;
  overflow: hidden;
`

export const LineChartWrapper = styled.div`
  width: 100%;
  height: 32px;
`

export const HomeSunriseWrapper = styled.div`
  padding-top: 6px;
  display: flex;
  flex-direction: column;
  position: relative;
`
export const HomeSunriseWrapperAbsolute = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export const HomeMapWrapper = styled.div`
  margin-top: 6px;
  height: 200px;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HomeMapIconWrapper = styled.div`
  position: absolute;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
`
export const HomeMapIconCircle = styled.div`
  height: 28px;
  width: 28px;
  border-radius: 100px;
  background-color: #f8f2d9;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HomeMapIconCircleTitle = styled.span`
  ${FontInterB14}
`
export const HomeMapIconTitle = styled.span`
  ${FontInterB14}
  color: black;
  text-shadow:
    2px 0 #fff,
    -2px 0 #fff,
    0 2px #fff,
    0 -2px #fff,
    1px 1px #fff,
    -1px -1px #fff,
    1px -1px #fff,
    -1px 1px #fff;
`
export const SunriseSunsetWrapper = styled.div`
  height: 54px;
  width: 100%;
`
