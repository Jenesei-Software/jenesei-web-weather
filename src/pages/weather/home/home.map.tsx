import {
  HomeInfoCardContainer,
  HomeInfoCardContainerBlur,
  HomeInfoCardContainerContent,
  HomeInfoCardContainerContentTitle,
  HomeInfoCardContainerContentLine,
  HomeMapProps,
  MapWrapper,
} from '.'
import { load } from '@2gis/mapgl'
import { Map } from '@2gis/mapgl/types'
import { IconWeather } from '@assets/icons/icon-weather'
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
    // Удаляем карту при размонтировании компонента
    return () => map && map.destroy()
  }, [])
  return (
    <HomeInfoCardContainer>
      <HomeInfoCardContainerContent>
        <HomeInfoCardContainerContentTitle>
          <IconWeather.MapTemperature />
          <StyledInterR12>TEMPERATURE</StyledInterR12>
        </HomeInfoCardContainerContentTitle>
        <HomeInfoCardContainerContentLine />
        <MemoMap />
      </HomeInfoCardContainerContent>
      <HomeInfoCardContainerBlur />
    </HomeInfoCardContainer>
  )
}

const MemoMap = React.memo(
  () => {
    return <MapWrapper id="map-container" style={{ width: '100%' }} />
  },
  () => true
)
