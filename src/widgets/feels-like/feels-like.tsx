import { WidgetFeelsLikeProps } from '.'
import { IconWeather } from '@assets/icons/icon-weather'
import { LayoutWidget } from '@layouts/layout-widget'
import { FrameWidgetTitleContainer } from '@styles/components'
import { JeneseiTheme, SpanInterM20, SpanInterR12 } from 'jenesei-react-ui'
import { FC } from 'react'

export const WidgetFeelsLike: FC<WidgetFeelsLikeProps> = (props) => {
  return (
    <LayoutWidget
      height="80px"
      title={
        <>
          <IconWeather.FeelsLike />
          <SpanInterR12 color={JeneseiTheme.colors.white[100]}>
            FEELS LIKE
          </SpanInterR12>
        </>
      }
      content={
        props.data && (
          <FrameWidgetTitleContainer>
            <SpanInterM20 color={JeneseiTheme.colors.white[100]}>
              {props.data.current.feels_like.toFixed() + '°'}
            </SpanInterM20>
          </FrameWidgetTitleContainer>
        )
      }
    />
  )
}
