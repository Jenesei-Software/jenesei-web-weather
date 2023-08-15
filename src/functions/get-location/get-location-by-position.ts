import { AccuWeatherAxios } from "../axios-instance/axios-instance";

import { setLocation } from "../stores/info-location";

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
