import { LayoutWeatherWrapper } from '.'
import { Outlet } from 'react-router-dom'

export const LayoutWeather: React.FC = () => {
  return (
    <LayoutWeatherWrapper>
      <Outlet />
    </LayoutWeatherWrapper>
  )
}
