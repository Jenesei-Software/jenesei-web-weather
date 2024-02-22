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
      <SpanInterR36>
        <WidgetGeneralStyledTextTransition springConfig={presets.gentle}>
          {props.selectedCity.name}
        </WidgetGeneralStyledTextTransition>
      </SpanInterR36>
      <WidgetStyledSpanInterT10
        $hasPlusOrMinus={hasPlusOrMinus(props.data?.current.temp)}
      >
        {props.data?.current.temp.toFixed(1)}°
      </WidgetStyledSpanInterT10>
      <SpanInterR20>{props.data?.current.weather[0].main}</SpanInterR20>
      <WidgetGeneralTeamsContainer>
        <SpanInterM18>H: {props.data?.daily[0].temp.max}°</SpanInterM18>
        <SpanInterM18>L: {props.data?.daily[0].temp.min}°</SpanInterM18>
      </WidgetGeneralTeamsContainer>
    </WidgetGeneralContainer>
  )
}
