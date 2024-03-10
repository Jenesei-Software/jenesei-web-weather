import {
  WidgetGeneralContainer,
  WidgetGeneralProps,
  WidgetGeneralStyledTextTransition,
  WidgetGeneralTeamsContainer,
  WidgetStyledSpanInterT10,
} from '.'
import { hasPlusOrMinus } from '@functions/has-plus-or-minus'
import {
  JeneseiTheme,
  SpanInterM18,
  SpanInterR20,
  SpanInterR36,
} from 'jenesei-react-ui'
import { FC } from 'react'
import { presets } from 'react-text-transition'

export const WidgetGeneral: FC<WidgetGeneralProps> = (props) => {
  return (
    <WidgetGeneralContainer>
      <SpanInterR36 color={JeneseiTheme.colors.white[100]}>
        <WidgetGeneralStyledTextTransition springConfig={presets.gentle}>
          {props.selectedCity.name}
        </WidgetGeneralStyledTextTransition>
      </SpanInterR36>
      <WidgetStyledSpanInterT10
        $hasPlusOrMinus={hasPlusOrMinus(props.data?.current.temp)}
      >
        {props.data?.current.temp.toFixed(1)}°
      </WidgetStyledSpanInterT10>
      <SpanInterR20 color={JeneseiTheme.colors.white[100]}>
        {props.data?.current.weather[0].main}
      </SpanInterR20>
      <WidgetGeneralTeamsContainer>
        <SpanInterM18 color={JeneseiTheme.colors.white[100]}>
          H: {props.data?.daily[0].temp.max}°
        </SpanInterM18>
        <SpanInterM18 color={JeneseiTheme.colors.white[100]}>
          L: {props.data?.daily[0].temp.min}°
        </SpanInterM18>
      </WidgetGeneralTeamsContainer>
    </WidgetGeneralContainer>
  )
}
