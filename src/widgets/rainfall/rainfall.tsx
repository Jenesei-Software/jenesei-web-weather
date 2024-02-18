import { WidgetRainfallProps } from '.'
import { IconWeather } from '@assets/icons/icon-weather'
import { LayoutWidget } from '@layouts/layout-widget'
import { FrameWidgetTitleContainer } from '@styles/components'
import { SpanInterM20, SpanInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'

export const WidgetRainfall: FC<WidgetRainfallProps> = (props) => {
  return (
    <LayoutWidget
      height="94px"
      title={
        <>
          <IconWeather.Rainfall />
          <SpanInterR12>RAINFALL</SpanInterR12>
        </>
      }
      content={
        props.realtimeCurrent && (
          <FrameWidgetTitleContainer>
            <SpanInterM20>
              {props.realtimeCurrent.precip_mm + ' mm'}
            </SpanInterM20>
          </FrameWidgetTitleContainer>
        )
      }
    />
  )
}
