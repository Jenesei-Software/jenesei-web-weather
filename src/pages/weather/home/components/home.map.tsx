import {
  HomeMapIconCircle,
  HomeMapIconCircleTitle,
  HomeMapIconTitle,
  HomeMapIconWrapper,
  HomeMapProps,
  HomeMapWrapper,
  MapWrapper,
} from '..'
import { load } from '@2gis/mapgl'
import { Map } from '@2gis/mapgl/types'
import { IconWeather } from '@assets/icons/icon-weather'
import { WeatherMap } from '@components/weather-map'
import { KEYS_2GIS } from '@core/keys'
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
          props.dataGetRealtime.location.lon,
          props.dataGetRealtime.location.lat,
        ],
        zoom: 9,
        key: KEYS_2GIS,
        zoomControl: false,
        disableZoomOnScroll: true,
        disableDragging: true,
      })
      map.addIcon('newIconName', { url: '//path_to_icon/new-icon.svg' })
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
      content={
        <HomeMapWrapper>
          <WeatherMap
            lat={props.dataGetRealtime.location.lat}
            lon={props.dataGetRealtime.location.lon}
            zoom={9}
          />
          <HomeMapIconWrapper>
            <HomeMapIconCircle>
              <HomeMapIconCircleTitle>
                {props.dataGetRealtime.current.temp_c}°
              </HomeMapIconCircleTitle>
            </HomeMapIconCircle>
            <HomeMapIconTitle>
              {props.dataGetRealtime.location.name}
            </HomeMapIconTitle>
          </HomeMapIconWrapper>
          <MemoMap />
        </HomeMapWrapper>
      }
    />
  )
}

const MemoMap = React.memo(
  () => {
    return <MapWrapper id="map-container" style={{ width: '100%' }} />
  },
  () => true
)
