import { HomeWindProps } from '..'
import { IconWeather } from '@assets/icons/icon-weather'
import { LayoutWidget } from '@layouts/layout-widget'
import { StyledInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'

export const HomeWind: FC<HomeWindProps> = () => {
  return (
    <LayoutWidget
      title={
        <>
          <IconWeather.Wind />
          <StyledInterR12>WIND</StyledInterR12>
        </>
      }
      content={undefined}
    />
  )
}
