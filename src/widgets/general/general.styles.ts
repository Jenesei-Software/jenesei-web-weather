import { SpanInterT10 } from '@styles/fonts/inter'
import TextTransition from 'react-text-transition'
import styled from 'styled-components'

export const WidgetGeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 34px;
  height: 185px;
  min-width: 200px;
  width: 100%;
`

export const WidgetGeneralStyledTextTransition = styled(TextTransition)`
  justify-content: center;
  align-items: center;
`
export const WidgetStyledSpanInterT10 = styled(SpanInterT10)<{
  $hasPlusOrMinus: boolean
}>`
  line-height: 95px;
  display: flex;
`

export const WidgetGeneralTeamsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`
