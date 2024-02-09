/* eslint-disable @typescript-eslint/no-explicit-any */
import { WeatherMapProps, WeatherMapWrapper } from '.'
import { KEYS_OPENWEATHER } from '@core/keys/openweathermap'
import { LatLngExpression } from 'leaflet'
import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

export const WeatherMap: React.FC<WeatherMapProps> = (props) => {
  const position: LatLngExpression = [props.lat, props.lon]

  return (
    <WeatherMapWrapper>
      <MapContainer
        center={position}
        zoom={props.zoom}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          id="map"
          url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${KEYS_OPENWEATHER}`}
        />
      </MapContainer>
    </WeatherMapWrapper>
  )
}
