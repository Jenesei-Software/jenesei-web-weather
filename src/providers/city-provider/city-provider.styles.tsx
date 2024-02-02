import styled from 'styled-components'
import { Swiper } from 'swiper/react'

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  & .swiper-pagination-bullet-active {
    background: ${(props) => props.theme.color.default.white};
  }
`
