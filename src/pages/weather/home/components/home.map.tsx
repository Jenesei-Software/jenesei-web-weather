import { HomeMapProps, MapWrapper } from '..'
import { load } from '@2gis/mapgl'
import { Map } from '@2gis/mapgl/types'
import { IconWeather } from '@assets/icons/icon-weather'
import { LayoutWidget } from '@layouts/layout-widget'
import { StyledInterR12 } from '@styles/fonts/inter'
import React from 'react'
import { FC, useEffect } from 'react'

export const HomeMap: FC<HomeMapProps> = (props) => {
  useEffect(() => {
    let map: Map
    load().then((mapglAPI) => {
      map = new mapglAPI.Map('map-container', {
        center: [
          props.dataGetRealtime.location.lat,
          props.dataGetRealtime.location.lon,
        ],
        zoom: 13,
        key: 'Your API access key',
      })
    })
    return () => map && map.destroy()
  }, [])
  return (
    <LayoutWidget
      title={
        <>
          <IconWeather.MapTemperature />
          <StyledInterR12>TEMPERATURE</StyledInterR12>
        </>
      }
      content={<MemoMap />}
    />
  )
}

const MemoMap = React.memo(
  () => {
    return <MapWrapper id="map-container" style={{ width: '100%' }} />
  },
  () => true
)
