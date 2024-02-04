import {
  PointRelativeToLineOne,
  PointRelativeToLineOneWrapper,
  PointRelativeToLineProps,
  PointRelativeToLineWrapper,
} from '.'
import { FC } from 'react'

export const PointRelativeToLine: FC<PointRelativeToLineProps> = (props) => {
  const percentagePerPixel = 100 / props.maxValue
  const particleBarLeft = props.value * percentagePerPixel
  return (
    <PointRelativeToLineWrapper
      $gradient={props.gradient}
      className={props.className}
    >
      <PointRelativeToLineOneWrapper $left={particleBarLeft}>
        <PointRelativeToLineOne />
      </PointRelativeToLineOneWrapper>
    </PointRelativeToLineWrapper>
  )
}
