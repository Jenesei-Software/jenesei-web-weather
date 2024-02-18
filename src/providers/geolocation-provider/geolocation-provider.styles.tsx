import { FontInterR36, FontInterSB16 } from '@styles/fonts/inter'
import styled from 'styled-components'

export const LocationIsNotAllowedWrapper = styled.div`
  display: flex;
  height: 100dvh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
`

export const LocationIsNotAllowedTitle = styled.div`
  ${FontInterR36}
  text-align: center;
`

export const LocationIsNotAllowedButton = styled.button`
  ${FontInterSB16};
  background: transparent;
  width: 100px;
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding: 12px;
  max-width: 500px;
  box-sizing: border-box;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
`
