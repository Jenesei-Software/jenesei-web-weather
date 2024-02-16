import { SpanInterR16 } from '@styles/fonts/inter'
import { theme } from '@styles/theme'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

export const UIReactLoading = styled(ReactLoading)``
UIReactLoading.defaultProps = {
  color: theme.color.black[80],
  type: 'spin',
  height: '42px',
  width: '42px',
}

export const UIALotOfTitle = styled.div``

export const UIInterR16OnClick = styled(SpanInterR16)`
  color: ${(props) => props.theme.color.product['100']};
  cursor: pointer;
`

export const UIUserLine = styled.div`
  display: flex;
  height: 2px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  width: 100%;
  background: ${(props) => props.theme.color.black[5]};
`
