import { WidgetRainfallProps } from '.'
import { IconWeather } from '@assets/icons/icon-weather'
import { LayoutWidget } from '@layouts/layout-widget'
import { FrameWidgetTitleContainer } from '@styles/components'
import { JeneseiTheme, SpanInterM20, SpanInterR12 } from 'jenesei-react-ui'
import { FC } from 'react'

export const WidgetRainfall: FC<WidgetRainfallProps> = (props) => {
  return (
    <LayoutWidget
      height="94px"
      title={
        <>
          <IconWeather.Rainfall />
          <SpanInterR12 color={JeneseiTheme.colors.white[100]}>
            {props.data && props.data.current.rain
              ? 'RAINFALL'
              : props.data && props.data.current.snow
                ? 'SNOW'
                : ''}
          </SpanInterR12>
        </>
      }
      content={
        props.data && (
          <FrameWidgetTitleContainer>
            <SpanInterM20 color={JeneseiTheme.colors.white[100]}>
              {(props.data.current.rain?.['1h'] ||
                props.data.current.snow?.['1h'] ||
                0) + ' mm'}
            </SpanInterM20>
          </FrameWidgetTitleContainer>
        )
      }
    />
  )
}
