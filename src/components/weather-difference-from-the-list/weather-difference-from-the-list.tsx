import {
  WeatherDifferenceFromTheListDay,
  WeatherDifferenceFromTheListNow,
  WeatherDifferenceFromTheListNowWrapper,
  WeatherDifferenceFromTheListProps,
  WeatherDifferenceFromTheListWrapper,
} from '.'
import { FC } from 'react'

export const WeatherDifferenceFromTheList: FC<
  WeatherDifferenceFromTheListProps
> = (props) => {
  const lengthList = props.list.maxtemp - props.list.mintemp
  const lengthListOnePercent = lengthList / 100
  const minDayLeft =
    (props.day.mintemp - props.list.mintemp) / lengthListOnePercent

  const lengthDay =
    (props.day.maxtemp - props.day.mintemp) / lengthListOnePercent

  const nowLeft =
    props.now && (props.now?.temp - props.list.mintemp) / lengthListOnePercent
  return (
    <WeatherDifferenceFromTheListWrapper className={props.className}>
      {props.now && nowLeft && (
        <WeatherDifferenceFromTheListNowWrapper $left={nowLeft}>
          <WeatherDifferenceFromTheListNow />
        </WeatherDifferenceFromTheListNowWrapper>
      )}
      <WeatherDifferenceFromTheListDay
        $left={minDayLeft}
        width={lengthDay}
        $leftTemperature={props.day.mintemp}
        $rightTemperature={props.day.maxtemp}
      />
    </WeatherDifferenceFromTheListWrapper>
  )
}
