import styled from 'styled-components'

export const ScrollableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 28px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }

  -ms-overflow-style: none;

  overflow: -moz-scrollbars-none;
`
