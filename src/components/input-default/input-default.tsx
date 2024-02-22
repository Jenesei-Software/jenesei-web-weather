import { InputDefaultProps, UIInputDefault, UIInputLeftContainer } from '.'
import { IconLibrary } from '@assets/icons/icon-library'
import { FrameFlexCenter } from '@styles/components'

export const InputDefault = (props: InputDefaultProps) => {
  return (
    <FrameFlexCenter
      className={props.className}
      width="100%"
      $position="relative"
    >
      {props.leftContainer && (
        <UIInputLeftContainer>
          <IconLibrary.Search />
        </UIInputLeftContainer>
      )}
      <UIInputDefault
        $leftContainer={props.leftContainer}
        disabled={props.disabled}
        readOnly={props.readOnly}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        value={props.value}
        {...props.register}
        placeholder={props.placeholder}
        type={props.type}
      />
    </FrameFlexCenter>
  )
}
