import { UIInput } from '@styles/components'
import styled from 'styled-components'

export const InputDefaultStyledUIInput = styled.input<{
  $prefixWidth?: string
  $prefixLeft?: string
  $prefixRight?: string
}>`
  ${UIInput};
  padding-left: ${(props) =>
    props.$prefixWidth &&
    `calc(${props.$prefixWidth} + ${props.$prefixLeft} + ${props.$prefixRight})`};
`

export const InputDefaultPrefixContent = styled.div<{
  $width: string
  $left: string
}>`
  position: absolute;
  opacity: 0.6;
  left: ${(props) => props.$left};
  width: ${(props) => props.$width};
`
