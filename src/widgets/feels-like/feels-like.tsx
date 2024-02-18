import { WidgetFeelsLikeProps } from '.'
import { IconWeather } from '@assets/icons/icon-weather'
import { LayoutWidget } from '@layouts/layout-widget'
import { FrameWidgetTitleContainer } from '@styles/components'
import { SpanInterM20, SpanInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'

export const WidgetFeelsLike: FC<WidgetFeelsLikeProps> = (props) => {
  return (
    <LayoutWidget
      height="80px"
      title={
        <>
          <IconWeather.FeelsLike />
          <SpanInterR12>FEELS LIKE</SpanInterR12>
        </>
      }
      content={
        props.realtimeCurrent && (
          <FrameWidgetTitleContainer>
            <SpanInterM20>
              {props.realtimeCurrent.feelslike_c + '°'}
            </SpanInterM20>
          </FrameWidgetTitleContainer>
        )
      }
    />
  )
}
