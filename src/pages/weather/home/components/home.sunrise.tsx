import { HomeSunriseProps, HomeSunriseWrapper, SunriseSunsetWrapper } from '..'
import { IconWeather } from '@assets/icons/icon-weather'
import { ISun, SunriseSunset } from '@components/sunrise-sunset'
import { LayoutWidget } from '@layouts/layout-widget'
import {
  StyledInterR12,
  StyledInterR16,
  StyledInterR24,
} from '@styles/fonts/inter'
import { DateTime } from 'luxon'
import { FC, useState } from 'react'
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

export const HomeSunrise: FC<HomeSunriseProps> = (props) => {
  const localDate = convertLocalTimeToUTC(
    props.realtimeLocation.tz_id,
    props.realtimeLocation.localtime_epoch
  )
  const localSun = SunCalc.getTimes(
    localDate,
    props.realtimeLocation.lat,
    props.realtimeLocation.lon
  )

  const [data] = useState<ISun[]>(
    getSunPositionsForDay(
      props.realtimeLocation.localtime_epoch,
      props.realtimeLocation.lat,
      props.realtimeLocation.lon,
      props.realtimeLocation.tz_id,
      localSun
    )
  )
  return (
    data && (
      <LayoutWidget
        title={
          <>
            <IconWeather.Sunrise />
            <StyledInterR12>SUNRISE</StyledInterR12>
          </>
        }
        content={
          <HomeSunriseWrapper>
            <StyledInterR24>
              {convertUTCToLocalTime(
                props.realtimeLocation.tz_id,
                localSun.sunrise
              )}
            </StyledInterR24>
            <SunriseSunsetWrapper>
              <SunriseSunset value={data} />
            </SunriseSunsetWrapper>
            <StyledInterR16>
              Sunset:{' '}
              {convertUTCToLocalTime(
                props.realtimeLocation.tz_id,
                localSun.sunset
              )}
            </StyledInterR16>
          </HomeSunriseWrapper>
        }
      />
    )
  )
}
