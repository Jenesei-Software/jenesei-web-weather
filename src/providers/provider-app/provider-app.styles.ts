import styled from 'styled-components'

export const ProviderAppWrapper = styled.div<{ $background: string }>`
  display: flex;
  flex-direction: column;
  max-width: 100dvw;
  min-height: 100dvh;
  background-color: ${(props) => props.$background};
  transition: background-color 100ms linear;
`
