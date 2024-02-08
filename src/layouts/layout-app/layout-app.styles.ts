import styled from 'styled-components'

export const LayoutAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100dvw;
  max-width: 100dvw;
  /* min-height: 100dvh;
  overflow: hidden; */
  background-color: ${(props) => props.theme.color.product['100']};
  /* background-image: url('https://upload.wikimedia.org/wikipedia/commons/2/22/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA_%28%D0%BD%D0%BE%D1%87%D0%BD%D0%BE%D0%B9%29.jpg'); */
  background-size: cover;
`
