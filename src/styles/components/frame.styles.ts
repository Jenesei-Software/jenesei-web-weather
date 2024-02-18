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
