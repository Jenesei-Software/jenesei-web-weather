import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  & .swiper-pagination-bullet-active {
    background: ${(props) => props.theme.color.default.white};
  }
  & .swiper-pagination {
    bottom: 0;
  }
`

export const StyledSwiperSlide = styled(SwiperSlide)``
