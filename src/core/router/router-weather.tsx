import { getIPAddress } from '@api/auth'
import { LayoutWeather } from '@layouts/layout-weather'
import { Home } from '@pages/weather/home'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AppRoutesWeather: FC = () => {
  const { data: dataIPAddress } = useQuery({
    ...getIPAddress(),
  })
  return (
    <Routes>
      <Route path="weather" element={<LayoutWeather />}>
        {dataIPAddress?.ip && (
          <Route path="home" element={<Home IPAddress={dataIPAddress?.ip} />} />
        )}
      </Route>
      <Route index element={<Navigate to="/weather/home" />} />
      <Route path="*" element={<Navigate to="/weather/home" />} />
    </Routes>
  )
}
