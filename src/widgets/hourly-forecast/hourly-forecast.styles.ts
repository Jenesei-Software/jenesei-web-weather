import styled from 'styled-components'
import { Swiper } from 'swiper/react'

export const WidgetHourlyForecastContainerContentList = styled.div``
export const WidgetHourlyForecastContainerContentListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  width: 36px;
`

export const WidgetHourlyForecastContainerContentListItemDay = styled.div``

export const WidgetHourlyForecastContainerContentListItemPicture = styled.div<{
  $url: string
}>`
  background-image: ${(props) =>
    `url(https://openweathermap.org/img/wn/${props.$url}.png)`};
  background-size: cover;
  width: 36px;
  height: 36px;
`

export const WidgetHourlyForecastContainerContentListItemData = styled.div<{
  $hasPlusOrMinus: boolean
}>``

export const WidgetHourlyForecastStyledSwiper = styled(Swiper)`
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
