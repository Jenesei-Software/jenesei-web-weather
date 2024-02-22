import { PointRelativeToLine } from '@components/point-relative-to-line'
import styled from 'styled-components'

export const FrameModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`

export const FrameWidgetTitleContainer = styled.div`
  padding-top: 6px;
`

export const FrameWidgetStyledPointRelativeToLine = styled(PointRelativeToLine)`
  margin-top: 10px;
`

export interface FrameProps {
  $position?: 'relative' | 'static'
  width?: string
}
export const FrameFlexCenter = styled.div<FrameProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  position: ${(props) => (props.$position ? props.$position : 'static')};
  display: flex;
  align-items: center;
  justify-content: center;
`
