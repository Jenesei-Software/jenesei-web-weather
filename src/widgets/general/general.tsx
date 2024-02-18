import {
  WidgetGeneralContainer,
  WidgetGeneralProps,
  WidgetGeneralStyledTextTransition,
  WidgetGeneralTeamsContainer,
  WidgetStyledSpanInterT10,
} from '.'
import { hasPlusOrMinus } from '@functions/has-plus-or-minus'
import { SpanInterM18, SpanInterR20, SpanInterR36 } from '@styles/fonts/inter'
import { FC } from 'react'
import { presets } from 'react-text-transition'

export const WidgetGeneral: FC<WidgetGeneralProps> = (props) => {
  return (
    <WidgetGeneralContainer>
      <>
        <SpanInterR36>
          <WidgetGeneralStyledTextTransition springConfig={presets.gentle}>
            {props.dataGetRealtime?.location.name}
          </WidgetGeneralStyledTextTransition>
        </SpanInterR36>
        <WidgetStyledSpanInterT10
          $hasPlusOrMinus={hasPlusOrMinus(
            props.dataGetRealtime?.current.temp_c
          )}
        >
          {props.dataGetRealtime?.current.temp_c}°
        </WidgetStyledSpanInterT10>
        <SpanInterR20>
          {props.dataGetRealtime?.current.condition.text}
        </SpanInterR20>
        <WidgetGeneralTeamsContainer>
          <SpanInterM18>
            H: {props.dataGetForecastDay?.[0].day.maxtemp_c}°
          </SpanInterM18>
          <SpanInterM18>
            L: {props.dataGetForecastDay?.[0].day.mintemp_c}°
          </SpanInterM18>
        </WidgetGeneralTeamsContainer>
      </>
    </WidgetGeneralContainer>
  )
}
