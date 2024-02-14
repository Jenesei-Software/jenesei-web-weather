import {
  LayoutWidgetContainer,
  LayoutWidgetContainerContent,
  LayoutWidgetContainerLine,
  LayoutWidgetContainerTitle,
  LayoutWidgetWrapper,
} from '.'
import { LayoutWidgetProps } from './layout-widget.types'
import { FC } from 'react'

export const LayoutWidget: FC<LayoutWidgetProps> = (props) => {
  return (
    <LayoutWidgetWrapper $height={props.height} $width={props.width}>
      <LayoutWidgetContainer>
        <LayoutWidgetContainerTitle>{props.title}</LayoutWidgetContainerTitle>
        <LayoutWidgetContainerLine />
        <LayoutWidgetContainerContent>
          {props.content}
        </LayoutWidgetContainerContent>
      </LayoutWidgetContainer>
    </LayoutWidgetWrapper>
  )
}
