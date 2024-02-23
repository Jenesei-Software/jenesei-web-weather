import { FontInterR19 } from '@styles/fonts/inter'
import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import styled, { css } from 'styled-components'

export const UIInputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`

const UIInputIconOnCLickTrue = css`
  cursor: pointer;
`

export interface UIInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn
  value?: string
  readOnly?: boolean
  icon?: {
    value: () => JSX.Element
    onCLick: () => void
  }
}

export interface UIInputIconProps {
  $icon?: UIInputProps['icon']
}

export const UIInputIcon = styled.div<UIInputIconProps>`
  position: absolute;
  right: 0px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;

  ${(props) => props.$icon?.onCLick && UIInputIconOnCLickTrue}

  & svg {
    width: 19px;
    height: 19px;
    & path {
      fill: ${(props) => props.theme.color.black['80']};
    }
  }
`

export const UIInputPlaceholder = css`
  ${FontInterR19};
  color: ${(props) => props.theme.color.default.white};
  opacity: 0.6;
`
export const UIInput = css`
  ${FontInterR19};
  ${UIInputPlaceholder};
  padding: 0px 12px 0px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  resize: none;
  overflow: hidden;
  outline: none;
  height: 52px;
  min-height: 52px;
  max-height: 52px;
  line-height: 24px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 16px;
  border: none;
  z-index: 1;
  outline: 1px solid transparent;
  transition: outline-color 0.2s;
  background: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  background: rgb(255, 255, 255, 0.1);
  &::placeholder {
    ${UIInputPlaceholder}
  }

  &::-ms-input-placeholder {
    ${UIInputPlaceholder}
  }
  &:focus,
  &:focus-visible {
    outline: 1px solid ${(props) => props.theme.color.default.white};
  }
  &*,
  &*::before,
  &*::after {
    box-sizing: border-box;
  }
`
