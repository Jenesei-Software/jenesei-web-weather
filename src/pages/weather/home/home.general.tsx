import {
  HomeGeneralContainer,
  HomeStyledStyledInterT10,
  HomeGeneralTeamsContainer,
  HomeGeneralProps,
} from '.'
import { hasPlusOrMinus } from '@functions/has-plus-or-minus'
import {
  StyledInterM18,
  StyledInterR20,
  StyledInterR36,
} from '@styles/fonts/inter'
import { FC } from 'react'

export const HomeGeneral: FC<HomeGeneralProps> = (props) => {
  return (
    <HomeGeneralContainer>
      <StyledInterR36>{props.dataGetRealtime?.location.name}</StyledInterR36>
      <HomeStyledStyledInterT10
        $hasPlusOrMinus={hasPlusOrMinus(props.dataGetRealtime?.current.temp_c)}
      >
        {props.dataGetRealtime?.current.temp_c}°
      </HomeStyledStyledInterT10>
      <StyledInterR20>
        {props.dataGetRealtime?.current.condition.text}
      </StyledInterR20>
      <HomeGeneralTeamsContainer>
        <StyledInterM18>
          H: {props.dataGetForecastDay[0].day.mintemp_c}°
        </StyledInterM18>
        <StyledInterM18>
          L: {props.dataGetForecastDay[0].day.maxtemp_c}°
        </StyledInterM18>
      </HomeGeneralTeamsContainer>
    </HomeGeneralContainer>
  )
}
