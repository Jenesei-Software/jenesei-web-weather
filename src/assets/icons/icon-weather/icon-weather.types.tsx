export type IconWeatherProps = {
  [icon in IconWeatherNameString]: (props: IconWeatherItemProps) => JSX.Element
}

export interface IconWeatherItemProps {
  className?: string
}

export enum IconWeatherName {
  DayForecast,
  AirQuality,
  HourlyForecast,
  MapTemperature,
  UVIndex,
  Sunrise,
  Wind,
  Rainfall,
  FeelsLike,
  Humidity,
}

export type IconWeatherNameString = keyof typeof IconWeatherName
