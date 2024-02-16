import {
  HomeAirQualityProps,
  HomeAirQualityTitleContainer,
  HomeAirQualityStyledPointRelativeToLine,
} from '..'
import { IconWeather } from '@assets/icons/icon-weather'
import { getUsEPAIndexToTitle } from '@functions/get-usEPAIndex-to-title'
import { LayoutWidget } from '@layouts/layout-widget'
import { SpanInterM20, SpanInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'

export const HomeAirQuality: FC<HomeAirQualityProps> = (props) => {
  return (
    <LayoutWidget
      height="94px"
      title={
        <>
          <IconWeather.AirQuality />
          <SpanInterR12>AIR QUALITY</SpanInterR12>
        </>
      }
      content={
        props.realtimeCurrent && (
          <>
            <HomeAirQualityTitleContainer>
              <SpanInterM20>
                {props.realtimeCurrent.air_quality.pm2_5 +
                  ' ' +
                  getUsEPAIndexToTitle(
                    props.realtimeCurrent.air_quality['us-epa-index']
                  )}
              </SpanInterM20>
            </HomeAirQualityTitleContainer>
            <HomeAirQualityStyledPointRelativeToLine
              value={props.realtimeCurrent.air_quality.pm2_5}
              maxValue={100}
              gradient="90deg,
            rgb(71, 146, 242) 10.891%,
            rgb(101, 219, 124) 23.275%,
            rgb(245, 231, 83) 39.373%,
            rgb(230, 58, 82) 59.111%,
            rgb(117, 33, 45) 76.859%"
            />
          </>
        )
      }
    />
  )
}
