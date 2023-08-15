import { AccuWeatherAxios } from "../../functions/axios-instance/axios-instance";
import { setLocation } from "../stores/info-location";
import { defaultGetLocationByPosition } from "./get-location-by-position";

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
        defaultGetLocationByPosition();
      }
    })
    .catch(() => {
      defaultGetLocationByPosition();
    });
};
