import styled from 'styled-components'

export const AirQualityOneFromTheLineWrapper = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 44px;
  background: linear-gradient(
    90deg,
    rgb(71, 146, 242) 10.891%,
    rgb(101, 219, 124) 23.275%,
    rgb(245, 231, 83) 39.373%,
    rgb(230, 58, 82) 59.111%,
    rgb(117, 33, 45) 76.859%
  );
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
`

export const AirQualityOneFromTheLineOneWrapper = styled.div<{
  $left: number
}>`
  left: calc(
    ${(props) =>
        props.$left < 0 ? 0 : props.$left > 100 ? 100 : props.$left + '%'} - 4px
  );
  width: 8px;
  height: 8px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  border-radius: 100px;
  background-color: #4195d2ff;
`
export const AirQualityOneFromTheLineOne = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 100px;
  background-color: white;
`
