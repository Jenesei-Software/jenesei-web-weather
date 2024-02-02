import { StyledInterT10 } from '@styles/fonts/inter'
import styled from 'styled-components'
import { Swiper } from 'swiper/react'

export const HomeWrapper = styled.div``

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
  margin-left: ${(props) => (props.$hasPlusOrMinus ? '-35px' : '0px')};
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
`

export const HomeInfoCardContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 46px;
  position: relative;
  padding: 15px;
  box-sizing: border-box;
`

export const HomeInfoCardContainerBlur = styled.div`
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.03);
  opacity: 0.7;
  width: 100%;
  min-height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
`

export const HomeInfoCardContainerContent = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  gap: 18px;
`

export const HomeInfoCardContainerContentTitle = styled.div``

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
  margin-left: ${(props) => (props.$hasPlusOrMinus ? '-10px' : '0px')};
`

export const HomeStyledSwiper = styled(Swiper)`
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
