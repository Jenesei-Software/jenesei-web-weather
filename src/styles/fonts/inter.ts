import styled, { css } from 'styled-components'

export interface StyledInterProps {
  color?: string
}

const FontInter = css`
  font-family: Inter;
  font-style: normal;
  line-height: normal;
  color: ${(props) => props.theme.color.default.white};
`

export const FontInterSB10 = css`
  ${FontInter};
  font-size: 10px;
  font-weight: 600;
`
export const StyledInterSB10 = styled.span<StyledInterProps>`
  ${FontInterSB10};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

export const FontInterSB14 = css`
  ${FontInter};
  font-size: 14px;
  font-weight: 600;
`
export const StyledInterSB14 = styled.span<StyledInterProps>`
  ${FontInterSB14};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

const FontInterSB16 = css`
  ${FontInter};
  font-size: 16px;
  font-weight: 600;
`
export const StyledInterSB16 = styled.span<StyledInterProps>`
  ${FontInterSB16};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

const FontInterSB18 = css`
  ${FontInter};
  font-size: 18px;
  font-weight: 600;
`
export const StyledInterSB18 = styled.span<StyledInterProps>`
  ${FontInterSB18};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

const FontInterSB20 = css`
  ${FontInter};
  font-size: 20px;
  font-weight: 600;
`
export const StyledInterSB20 = styled.span<StyledInterProps>`
  ${FontInterSB20};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

export const FontInterM12 = css`
  ${FontInter};
  font-size: 12px;
  font-weight: 500;
`
export const StyledInterM12 = styled.span<StyledInterProps>`
  ${FontInterM12};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

export const FontInterM14 = css`
  ${FontInter};
  font-size: 14px;
  font-weight: 500;
`
export const StyledInterM14 = styled.span<StyledInterProps>`
  ${FontInterM14};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

export const FontInterM16 = css`
  ${FontInter};
  font-size: 16px;
  font-weight: 500;
`
export const StyledInterM16 = styled.span<StyledInterProps>`
  ${FontInterM14};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`
export const StyledInterM16Mobile = styled.span<StyledInterProps>`
  ${FontInterM14};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
  @media (max-width: ${(props) => props.theme.size.mobile}) {
    font-size: 12px;
  }
`

export const FontInterM18 = css`
  ${FontInter};
  font-size: 18px;
  font-weight: 500;
`

export const StyledInterM18 = styled.span<StyledInterProps>`
  ${FontInterM18};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

export const FontInterM20 = css`
  ${FontInter};
  font-size: 20px;
  font-weight: 500;
`

export const StyledInterM20 = styled.span<StyledInterProps>`
  ${FontInterM20};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

export const FontInterM22 = css`
  ${FontInter};
  font-size: 22px;
  font-weight: 500;
`
export const StyledInterM22 = styled.span<StyledInterProps>`
  ${FontInterM22};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

export const FontInterB14 = css`
  ${FontInter};
  font-size: 14px;
  font-weight: 700;
`
export const StyledInterB14 = styled.span<StyledInterProps>`
  ${FontInterB14};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

export const FontInterB16 = css`
  ${FontInter};
  font-size: 16px;
  font-weight: 700;
`
export const StyledInterB16 = styled.span<StyledInterProps>`
  ${FontInterB16};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

export const FontInterB20 = css`
  ${FontInter};
  font-size: 20px;
  font-weight: 700;
`
export const StyledInterB20 = styled.span<StyledInterProps>`
  ${FontInterB20};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

const FontInterB32 = css`
  ${FontInter};
  font-size: 32px;
  font-weight: 700;
`
export const StyledInterB32 = styled.span<StyledInterProps>`
  ${FontInterB32};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

const FontInterB36 = css`
  ${FontInter};
  font-size: 36px;
  font-weight: 700;
`
export const StyledInterB36 = styled.span<StyledInterProps>`
  ${FontInterB36};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`
export const StyledInterB36Mobile = styled.span<StyledInterProps>`
  ${FontInterB36};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
  @media (max-width: ${(props) => props.theme.size.mobile}) {
    font-size: 20px;
  }
`

const FontInterR12 = css`
  ${FontInter};
  font-size: 12px;
  font-weight: 400;
`
export const StyledInterR12 = styled.span<StyledInterProps>`
  ${FontInterR12};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

const FontInterR14 = css`
  ${FontInter};
  font-size: 14px;
  font-weight: 400;
`
export const StyledInterR14 = styled.span<StyledInterProps>`
  ${FontInterR14};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

export const FontInterR16 = css`
  ${FontInter};
  font-size: 16px !important;
  font-weight: 400;
`
export const StyledInterR16 = styled.span<StyledInterProps>`
  ${FontInterR16};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

const FontInterR20 = css`
  ${FontInter};
  font-size: 20px;
  font-weight: 400;
`
export const StyledInterR20 = styled.span<StyledInterProps>`
  ${FontInterR20};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

const FontInterR24 = css`
  ${FontInter};
  font-size: 24px;
  font-weight: 400;
`
export const StyledInterR24 = styled.span<StyledInterProps>`
  ${FontInterR24};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

const FontInterR36 = css`
  ${FontInter};
  font-size: 36px;
  font-weight: 400;
`
export const StyledInterR36 = styled.span<StyledInterProps>`
  ${FontInterR36};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`

const FontInterT100 = css`
  ${FontInter};
  font-size: 100px;
  font-weight: 100;
`
export const StyledInterT10 = styled.span<StyledInterProps>`
  ${FontInterT100};
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
`
