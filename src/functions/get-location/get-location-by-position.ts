import {
  ACCU_WEATHER_API_KEY,
  AccuWeatherAxios,
} from "../axios-instance/axios-instance";

import { $infoLatLon, setLocation } from "../stores/info-location";

export const getLocationByPosition = async (
  latitude: number,
  longitude: number,
  accuWeatherApiKey: string
) => {
  AccuWeatherAxios.get("locations/v1/cities/geoposition/search/", {
    params: {
      apikey: accuWeatherApiKey,
      q: `${latitude},${longitude}`,
    },
  })
    .then((res) => {
      setLocation(res.data);
    })
    .catch((error) => {
      throw error;
    });
};

export const defaultGetLocationByPosition = () => {
  const location = $infoLatLon.getState();
  if (location && location.latitude && location.longitude)
    getLocationByPosition(
      location.latitude,
      location.longitude,
      ACCU_WEATHER_API_KEY
    );
};
