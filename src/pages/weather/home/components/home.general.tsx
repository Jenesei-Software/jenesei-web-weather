import {
  HomeGeneralContainer,
  HomeStyledSpanInterT10,
  HomeGeneralTeamsContainer,
  HomeGeneralProps,
} from '..'
import { hasPlusOrMinus } from '@functions/has-plus-or-minus'
import { SpanInterM18, SpanInterR20, SpanInterR36 } from '@styles/fonts/inter'
import { FC } from 'react'
import TextTransition, { presets } from 'react-text-transition'

export const HomeGeneral: FC<HomeGeneralProps> = (props) => {
  return (
    <HomeGeneralContainer>
      <>
        <SpanInterR36>
          <TextTransition springConfig={presets.gentle}>
            {props.dataGetRealtime?.location.name}
          </TextTransition>
        </SpanInterR36>
        <HomeStyledSpanInterT10
          $hasPlusOrMinus={hasPlusOrMinus(
            props.dataGetRealtime?.current.temp_c
          )}
        >
          {props.dataGetRealtime?.current.temp_c}°
        </HomeStyledSpanInterT10>
        <SpanInterR20>
          {props.dataGetRealtime?.current.condition.text}
        </SpanInterR20>
        <HomeGeneralTeamsContainer>
          <SpanInterM18>
            H: {props.dataGetForecastDay?.[0].day.maxtemp_c}°
          </SpanInterM18>
          <SpanInterM18>
            L: {props.dataGetForecastDay?.[0].day.mintemp_c}°
          </SpanInterM18>
        </HomeGeneralTeamsContainer>
      </>
    </HomeGeneralContainer>
  )
}
