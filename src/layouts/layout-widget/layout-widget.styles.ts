import styled from 'styled-components'

export const LayoutWidgetWrapper = styled.div<{
  $height?: string
  $width?: string
}>`
  width: ${(props) => props.$width ?? '100%'};
  height: ${(props) => props.$height ?? 'auto'};

  position: relative;
  padding: 12px;
  max-width: 500px;
  box-sizing: border-box;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`

export const LayoutWidgetContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 0px;
`

export const LayoutWidgetContainerContent = styled.div``
export const LayoutWidgetContainerTitle = styled.div`
  padding-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
  box-sizing: border-box;
  height: 22px;
  & span {
    opacity: 0.6;
  }
`

export const LayoutWidgetContainerLine = styled.div`
  width: 100%;
  height: 0;
  border: 0.2px solid rgb(255, 255, 255);
  opacity: 0.5;
  box-sizing: border-box;
`
