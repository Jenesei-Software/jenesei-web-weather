import {
  WidgetWindWrapper,
  WidgetWindLine,
  WidgetWindArrow,
  WidgetWindTitleContainer,
  WidgetWindProps,
} from '.'
import Arrow from '/wind/arrow.png'
import Line from '/wind/line.png'
import { IconWeather } from '@assets/icons/icon-weather'
import { LayoutWidget } from '@layouts/layout-widget'
import {
  JeneseiTheme,
  SpanInterR12,
  SpanInterR14,
  SpanInterSB20,
} from 'jenesei-react-ui'
import { FC } from 'react'

export const WidgetWind: FC<WidgetWindProps> = (props) => {
  return (
    <LayoutWidget
      height="162px"
      width="176px"
      title={
        <>
          <IconWeather.Wind />
          <SpanInterR12 color={JeneseiTheme.colors.white[100]}>
            WIND
          </SpanInterR12>
        </>
      }
      content={
        props.data && (
          <WidgetWindWrapper>
            <WidgetWindLine alt="Wind background" src={Line} />
            <WidgetWindArrow
              alt="Wind arrow"
              $transform={props.data.current.wind_deg}
              src={Arrow}
            />
            <WidgetWindTitleContainer>
              <SpanInterSB20 color={JeneseiTheme.colors.white[100]}>
                {props.data.current.wind_speed.toFixed(1)}
              </SpanInterSB20>
              <SpanInterR14 color={JeneseiTheme.colors.white[100]}>
                m/s
              </SpanInterR14>
            </WidgetWindTitleContainer>
          </WidgetWindWrapper>
        )
      }
    />
  )
}
