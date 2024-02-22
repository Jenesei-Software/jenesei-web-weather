import {
  WeatherDifferenceDay,
  WeatherDifferenceNow,
  WeatherDifferenceNowWrapper,
  WeatherDifferenceProps,
  WeatherDifferenceWrapper,
} from '.'
import { FC } from 'react'

export const WeatherDifference: FC<WeatherDifferenceProps> = (props) => {
  const lengthList = props.list.maxtemp - props.list.mintemp
  const lengthListOnePercent = lengthList / 100
  const minDayLeft =
    (props.day.mintemp - props.list.mintemp) / lengthListOnePercent

  const lengthDay =
    (props.day.maxtemp - props.day.mintemp) / lengthListOnePercent

  const nowLeft =
    props.now &&
    props.now?.temp &&
    (props.now?.temp - props.list.mintemp) / lengthListOnePercent
  return (
    <WeatherDifferenceWrapper className={props.className}>
      {props.now && nowLeft && (
        <WeatherDifferenceNowWrapper $left={nowLeft}>
          <WeatherDifferenceNow />
        </WeatherDifferenceNowWrapper>
      )}
      <WeatherDifferenceDay
        $left={minDayLeft}
        width={lengthDay}
        $leftTemperature={props.day.mintemp}
        $rightTemperature={props.day.maxtemp}
      />
    </WeatherDifferenceWrapper>
  )
}
