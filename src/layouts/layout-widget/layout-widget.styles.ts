import styled, { css } from 'styled-components'

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
`

export const LayoutWidgetContainer = styled.div<{
  $height?: string
  $minimized?: boolean
}>`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  gap: 0px;
  ${(props) =>
    props.$minimized &&
    css`
      justify-content: flex-end;
    `}
`

export const LayoutWidgetContainerContent = styled.div<{
  $opacityPercent?: number
}>`
  ${(props) =>
    props.$opacityPercent && props.$opacityPercent > 5
      ? css`
          opacity: ${(70 - props.$opacityPercent) / 100};
        `
      : css`
          opacity: 1;
        `}
`
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

export const LayoutWidgetContainerLine = styled.div<{
  $opacityPercent?: number
}>`
  width: 100%;
  height: 0;
  border: 0.2px solid rgb(255, 255, 255);
  opacity: 0.5;
  box-sizing: border-box;
  ${(props) =>
    props.$opacityPercent &&
    css`
      opacity: ${(50 - props.$opacityPercent) / 100};
    `}
`

export const LayoutWidgetContainerBlur = styled.div`
  box-sizing: border-box;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  opacity: 0.4;
  width: 100%;
  min-height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &:before {
    content: '';
    border-radius: 15px;
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0.2);
  }
`
