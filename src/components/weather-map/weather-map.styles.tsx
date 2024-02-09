import styled from 'styled-components'

export const WeatherMapWrapper = styled.div`
  height: 196px;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  & .leaflet-container {
    background: transparent;
  }
  & .leaflet-control-zoom {
    display: none;
  }
  & .leaflet-container .leaflet-control-attribution {
    display: none;
  }
`
