import {
  HomeAirQualityStyledPointRelativeToLine,
  HomeAirQualityTitleContainer,
  HomeUVIndexProps,
} from '..'
import { IconWeather } from '@assets/icons/icon-weather'
import { getUVIndexToTitle } from '@functions/get-uvIndex-to-title copy'
import { LayoutWidget } from '@layouts/layout-widget'
import { SpanInterM20, SpanInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'

export const HomeUVIndex: FC<HomeUVIndexProps> = (props) => {
  return (
    <LayoutWidget
      height="94px"
      title={
        <>
          <IconWeather.UVIndex />
          <SpanInterR12>UV INDEX</SpanInterR12>
        </>
      }
      content={
        props.realtimeCurrent && (
          <>
            <HomeAirQualityTitleContainer>
              <SpanInterM20>
                {props.realtimeCurrent.uv +
                  ' ' +
                  getUVIndexToTitle(
                    props.realtimeCurrent.air_quality['us-epa-index']
                  )}
              </SpanInterM20>
            </HomeAirQualityTitleContainer>
            <HomeAirQualityStyledPointRelativeToLine
              value={props.realtimeCurrent.uv}
              maxValue={12}
              gradient="90.00deg, rgb(101, 219, 124) 1.169%,rgb(245, 231, 83) 24.979%,rgb(230, 58, 82) 77.888%,rgb(181, 93, 224) 99.237%"
            />
          </>
        )
      }
    />
  )
}
