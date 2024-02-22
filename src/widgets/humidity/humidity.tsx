import { WidgetHumidityProps } from '.'
import { IconWeather } from '@assets/icons/icon-weather'
import { LayoutWidget } from '@layouts/layout-widget'
import { FrameWidgetTitleContainer } from '@styles/components'
import { SpanInterM20, SpanInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'

export const WidgetHumidity: FC<WidgetHumidityProps> = (props) => {
  return (
    <LayoutWidget
      height="80px"
      title={
        <>
          <IconWeather.Humidity />
          <SpanInterR12>HUMIDITY</SpanInterR12>
        </>
      }
      content={
        props.data && (
          <FrameWidgetTitleContainer>
            <SpanInterM20>{props.data.current.humidity + ' %'}</SpanInterM20>
          </FrameWidgetTitleContainer>
        )
      }
    />
  )
}
