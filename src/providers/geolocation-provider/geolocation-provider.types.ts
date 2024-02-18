export interface GeoLocationProviderProps {
  children: React.ReactNode
}

export interface GeoLocationContextProps {
  locationIsNotAllowed: boolean
  geoLocation: {
    latitude: number | null
    longitude: number | null
  }
  getGeoLocation: () => Promise<void>
}
