import {
  AirQualityOneFromTheLineOne,
  AirQualityOneFromTheLineOneWrapper,
  AirQualityOneFromTheLineProps,
  AirQualityOneFromTheLineWrapper,
} from '.'
import { FC } from 'react'

export const AirQualityOneFromTheLine: FC<AirQualityOneFromTheLineProps> = (
  props
) => {
  const maxParticleValue = 100
  const percentagePerPixel = 100 / maxParticleValue
  const particleBarLeft = props.pm2_5 * percentagePerPixel
  return (
    <AirQualityOneFromTheLineWrapper className={props.className}>
      <AirQualityOneFromTheLineOneWrapper $left={particleBarLeft}>
        <AirQualityOneFromTheLineOne />
      </AirQualityOneFromTheLineOneWrapper>
    </AirQualityOneFromTheLineWrapper>
  )
}
