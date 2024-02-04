export interface WeatherDifferenceFromTheListProps {
  list: {
    maxtemp: number
    mintemp: number
  }
  day: {
    maxtemp: number
    mintemp: number
  }
  now?: {
    temp: number
  }
  className?: string
}
