import { AccuWeatherAxios } from "../../functions/axios-instance/axios-instance";
import { $infoPermissionLocation, setLocation } from "../stores/info-location";
import { getLocationByPosition } from "./get-location-by-position";

export const getLocationByParamsAccuWeather = async (
  params: string,
  accuWeatherApiKey: string
) => {
  AccuWeatherAxios.get("locations/v1/cities/search/", {
    params: {
      apikey: accuWeatherApiKey,
      q: params,
    },
  })
    .then((res) => {
      if (res.data.length !== 0) {
        setLocation(res.data[0]);
      } else {
        const location = $infoPermissionLocation.getState();
        if (location && location.latitude && location.longitude)
          getLocationByPosition(
            location.latitude,
            location.longitude,
            accuWeatherApiKey
          );
      }
    })
    .catch(() => {
      const location = $infoPermissionLocation.getState();
      if (location && location.latitude && location.longitude)
        getLocationByPosition(
          location.latitude,
          location.longitude,
          accuWeatherApiKey
        );
    });
};
