import { getIntermediateColors } from '@functions/get-intermediate-colors'
import { getTemperatureColor } from '@functions/get-temperature-color'
import styled from 'styled-components'

export const WeatherDifferenceWrapper = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 44px;
  background: rgb(0, 0, 0, 0.15);
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
`

export const WeatherDifferenceNowWrapper = styled.div<{
  $left: number
}>`
  left: calc(
    ${(props) =>
        props.$left < 0
          ? '0%'
          : props.$left > 100
            ? '100%'
            : props.$left + '%'} - 4px
  );
  transition: left 1s;
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
export const WeatherDifferenceNow = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 100px;
  background-color: white;
`

interface WeatherDifferenceDayProps {
  $leftTemperature: number
  $rightTemperature: number
  $left: number
  width: number
}

export const WeatherDifferenceDay = styled.div<WeatherDifferenceDayProps>`
  width: ${(props) => props.width + '%'};
  height: 4px;
  margin-left: ${(props) => props.$left + '%'};
  transition: all 1s;
  border-radius: 44px;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(
    to right,
    ${(props) => getTemperatureColor(props.$leftTemperature)}
      ${(props) =>
        getIntermediateColors(props.$leftTemperature, props.$rightTemperature)},
    ${(props) => getTemperatureColor(props.$rightTemperature)}
  );
`
