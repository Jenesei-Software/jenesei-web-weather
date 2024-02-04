import { IconWeather } from '@assets/icons/icon-weather'
import { LayoutWidget } from '@layouts/layout-widget'
import { StyledInterR12 } from '@styles/fonts/inter'

export const HomeSunrise = () => {
  return (
    <LayoutWidget
      title={
        <>
          <IconWeather.Sunrise />
          <StyledInterR12>SUNRISE</StyledInterR12>
        </>
      }
      content={undefined}
    />
  )
}
