import { FontInterR19 } from '@styles/fonts/inter'
import styled, { css } from 'styled-components'

export const UIInputPlaceholder = css`
  ${FontInterR19};
  color: ${(props) => props.theme.color.default.white};
  opacity: 0.6;
`

export const UIInputLeftContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 16px;
  left: 12px;
`

export const UIInputDefault = styled.input<{ $leftContainer?: boolean }>`
  ${FontInterR19};
  padding: ${(props) =>
    props.$leftContainer ? '0px 12px 0px 38px' : '0px 12px 0px 12px'};
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
