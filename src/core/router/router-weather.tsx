import { LayoutWeather } from '@layouts/layout-weather'
import { Home } from '@pages/home'
import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AppRoutesWeather: FC = () => {
  return (
    <Routes>
      <Route element={<LayoutWeather />}>
        <Route path="home" element={<Home />} />
      </Route>
      <Route index element={<Navigate to="/home" />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
