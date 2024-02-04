import {
  LayoutWidgetContainer,
  LayoutWidgetContainerBlur,
  LayoutWidgetContainerContent,
  LayoutWidgetContainerLine,
  LayoutWidgetContainerTitle,
  LayoutWidgetWrapper,
} from '.'
import { LayoutWidgetProps } from './layout-widget.types'
import { FC } from 'react'

export const LayoutWidget: FC<LayoutWidgetProps> = (props) => {
  return (
    <LayoutWidgetWrapper>
      <LayoutWidgetContainer>
        <LayoutWidgetContainerTitle>{props.title}</LayoutWidgetContainerTitle>
        <LayoutWidgetContainerLine />
        <LayoutWidgetContainerContent>
          {props.content}
        </LayoutWidgetContainerContent>
      </LayoutWidgetContainer>
      <LayoutWidgetContainerBlur />
    </LayoutWidgetWrapper>
  )
}
