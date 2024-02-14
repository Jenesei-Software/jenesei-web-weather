import { LayoutWeather } from '@layouts/layout-weather'
import { Home } from '@pages/weather/home'
import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AppRoutesWeather: FC = () => {
  return (
    <Routes>
      <Route path="weather" element={<LayoutWeather />}>
        <Route path="home" element={<Home />} />
      </Route>
      <Route index element={<Navigate to="/weather/home" />} />
      <Route path="*" element={<Navigate to="/weather/home" />} />
    </Routes>
  )
}
