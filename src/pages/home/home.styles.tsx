import styled from 'styled-components'
import { SwiperSlide } from 'swiper/react'
import { Swiper } from 'swiper/react'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  position: relative;
  height: 100%;
  width: 100%;
  align-items: center;
`
export const HomeBackground = styled.div<{ $backgroundURL: string }>`
  background-image: url(${(props) => props.$backgroundURL});
  background-size: cover;
  height: 100%;
  min-height: 100dvh;
  width: 100dvw;
  background-color: ${(props) => props.theme.color.product['100']};
  position: absolute;
  overflow: hidden;
  top: 0;
  z-index: -1;
`
export const HomeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  padding-bottom: 10px;
  margin-top: 16px;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
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

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: static;
  & .swiper-pagination-bullet-active {
    background: ${(props) => props.theme.color.default.white};
  }
  & .swiper-pagination {
    bottom: 32px;
    width: auto;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 3;
  }
`

export const StyledSwiperSlide = styled(SwiperSlide)``
