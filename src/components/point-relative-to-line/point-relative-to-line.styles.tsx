import styled from 'styled-components'

export const PointRelativeToLineWrapper = styled.div<{ $gradient: string }>`
  width: 100%;
  height: 4px;
  border-radius: 44px;
  background: linear-gradient(${(props) => props.$gradient});
  position: relative;
  display: flex;
  align-items: center;
`

export const PointRelativeToLineOneWrapper = styled.div<{
  $left: number
}>`
  left: calc(
    ${(props) =>
        props.$left < 0
          ? '0%'
          : props.$left > 100
            ? '100%'
            : props.$left + '%'} - 4px
  );
  transition: left 1s;
  width: 8px;
  height: 8px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: #4195d2ff;
`
export const PointRelativeToLineOne = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 100px;
  background-color: white;
`
