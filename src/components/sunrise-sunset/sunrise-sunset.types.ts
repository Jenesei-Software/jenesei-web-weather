export interface SunriseSunsetProps {
  className?: string
  value: ISun[]
}

export interface ISun {
  time: number
  altitude: number
  now: boolean
  line: boolean
}
