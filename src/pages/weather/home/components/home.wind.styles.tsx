import styled from 'styled-components'

export const HomeWindLine = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
`
export const HomeWindArrow = styled.img<{ $transform: number }>`
  position: absolute;
  width: 80%;
  height: 80%;
  object-fit: contain;
  transform: rotate(${(props) => props.$transform}deg);
  transition: transform 0.5s ease;
`
export const HomeWindWrapper = styled.div`
  padding-top: 12px;
  height: 100px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const HomeWindTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
