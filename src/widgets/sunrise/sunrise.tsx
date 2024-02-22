import {
  WidgetSunriseProps,
  WidgetSunriseWrapper,
  WidgetSunriseSunsetWrapper,
} from '.'
import { IconWeather } from '@assets/icons/icon-weather'
import { ISun, SunriseSunset } from '@components/sunrise-sunset'
import { LayoutWidget } from '@layouts/layout-widget'
import { SpanInterR12, SpanInterR16, SpanInterR24 } from '@styles/fonts/inter'
import { DateTime } from 'luxon'
import { FC, useState, useEffect } from 'react'
import SunCalc from 'suncalc'

function getSunPositionsForDay(
  localtimeEpoch: number,
  lat: number,
  lng: number,
  tzId: string,
  localSun: SunCalc.GetTimesResult
): ISun[] {
  const result: ISun[] = []

  const startDate = DateTime.fromSeconds(localtimeEpoch, {
    zone: tzId,
  }).startOf('day')
  const endDate = startDate.plus({ days: 1 })

  const interval = 30

  const localSunTime = DateTime.fromSeconds(localtimeEpoch, { zone: tzId })
  let checkLocalSunIndex: number | null = null
  let localSunTimeDifference = Infinity

  const localLineTime = DateTime.fromJSDate(localSun.sunrise, { zone: tzId })
  let checkLocalLineIndex: number | null = null
  let localLineTimeDifference = Infinity

  for (
    let currentTime = startDate;
    currentTime <= endDate;
    currentTime = currentTime.plus({ minutes: interval })
  ) {
    const sunPosition = SunCalc.getPosition(currentTime.toJSDate(), lat, lng)
    const currentTimeMilliseconds = currentTime.toMillis()

    const timeDifferenceLocalSun = Math.abs(
      localSunTime
        .diff(DateTime.fromMillis(currentTimeMilliseconds))
        .as('milliseconds')
    )

    const timeDifferenceLocalLine = Math.abs(
      localLineTime
        .diff(DateTime.fromMillis(currentTimeMilliseconds))
        .as('milliseconds')
    )

    const sunInfo: ISun = {
      time: currentTimeMilliseconds,
      altitude: sunPosition.altitude,
      now: false,
      line: false,
    }

    result.push(sunInfo)

    if (timeDifferenceLocalSun < localSunTimeDifference) {
      checkLocalSunIndex = result.length - 1
      localSunTimeDifference = timeDifferenceLocalSun
    }

    if (timeDifferenceLocalLine < localLineTimeDifference) {
      checkLocalLineIndex = result.length - 1
      localLineTimeDifference = timeDifferenceLocalLine
    }
  }

  if (checkLocalSunIndex !== null) {
    result[checkLocalSunIndex].now = true
    result[checkLocalSunIndex].line = false
  }

  if (checkLocalLineIndex !== null) {
    result[checkLocalLineIndex].now = false
    result[checkLocalLineIndex].line = true
  }

  return normalizeAltitudeValues(normalizeTimeValues(result))
}
function normalizeTimeValues(sunArray: ISun[]): ISun[] {
  const minTime = Math.min(...sunArray.map((sun) => sun.time))
  const maxTime = Math.max(...sunArray.map((sun) => sun.time))

  const normalizedSunArray = sunArray.map((sun) => ({
    ...sun,
    time: Math.floor(((sun.time - minTime) / (maxTime - minTime)) * 100),
  }))

  return normalizedSunArray
}
function normalizeAltitudeValues(sunArray: ISun[]): ISun[] {
  const minTime = Math.min(...sunArray.map((sun) => sun.altitude))
  const maxTime = Math.max(...sunArray.map((sun) => sun.altitude))

  const normalizedSunArray = sunArray.map((sun) => ({
    ...sun,
    altitude: Math.floor(
      ((sun.altitude - minTime) / (maxTime - minTime)) * 100
    ),
  }))

  return normalizedSunArray
}
function convertUTCToLocalTime(tzId: string, utcTime: Date): string {
  const localTime = DateTime.fromJSDate(utcTime, { zone: tzId })
  const hours = localTime.toFormat('HH')
  const minutes = localTime.toFormat('mm')
  return `${hours}:${minutes}`
}
function convertLocalTimeToUTC(tzId: string, localtimeEpoch: number): Date {
  const localTime = DateTime.fromSeconds(localtimeEpoch, { zone: tzId })
  const utcTime = localTime.toUTC().toJSDate()
  return utcTime
}

export const WidgetSunrise: FC<WidgetSunriseProps> = (props) => {
  const [data, setData] = useState<ISun[]>([])
  const [localSun, setLocalSun] = useState<SunCalc.GetTimesResult | null>(null)

  useEffect(() => {
    if (props.data) {
      const localDate = convertLocalTimeToUTC(
        props.data.timezone,
        props.data.current.dt
      )
      const localSun = SunCalc.getTimes(
        localDate,
        props.data.lat,
        props.data.lon
      )
      setLocalSun(localSun)
      setData(
        getSunPositionsForDay(
          props.data.current.dt,
          props.data.lat,
          props.data.lon,
          props.data.timezone,
          localSun
        )
      )
    }
  }, [props])
  return (
    data && (
      <LayoutWidget
        height="162px"
        title={
          <>
            <IconWeather.Sunrise />
            <SpanInterR12>SUNRISE</SpanInterR12>
          </>
        }
        content={
          props.data &&
          localSun && (
            <WidgetSunriseWrapper>
              <SpanInterR24>
                {convertUTCToLocalTime(props.data.timezone, localSun.sunrise)}
              </SpanInterR24>
              <WidgetSunriseSunsetWrapper>
                <SunriseSunset value={data} />
              </WidgetSunriseSunsetWrapper>
              <SpanInterR16>
                Sunset:{' '}
                {convertUTCToLocalTime(props.data.timezone, localSun.sunset)}
              </SpanInterR16>
            </WidgetSunriseWrapper>
          )
        }
      />
    )
  )
}
