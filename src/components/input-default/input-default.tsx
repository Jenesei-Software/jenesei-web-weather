import {
  InputDefaultPrefixContent,
  InputDefaultProps,
  InputDefaultStyledUIInput,
} from '.'
import { FrameFlexCenter } from '@styles/components'

export const InputDefault = (props: InputDefaultProps) => {
  return (
    <FrameFlexCenter
      className={props.className}
      width="100%"
      $position="relative"
    >
      {props.prefixContent && (
        <InputDefaultPrefixContent
          $width={props.prefixContent.width}
          $left={props.prefixContent.left}
        >
          {props.prefixContent.content}
        </InputDefaultPrefixContent>
      )}
      <InputDefaultStyledUIInput
        {...props.register}
        $prefixWidth={props.prefixContent && props.prefixContent.width}
        $prefixLeft={props.prefixContent && props.prefixContent.left}
        $prefixRight={props.prefixContent && props.prefixContent.right}
        disabled={props.disabled}
        readOnly={props.readOnly}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
      />
    </FrameFlexCenter>
  )
}
