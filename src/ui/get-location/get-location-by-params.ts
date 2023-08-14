import { AccuWeatherOne } from "../axiosInstance/axiosInstance";
import { setInfoIpLocation } from "../stores/info-location";
import { fetchLocationByIp } from "./get-location-by-ip";

export const getLocationByParams = async (
  params: string,
  accuWeatherApiKey: string
) => {
  AccuWeatherOne.get("locations/v1/cities/search/", {
    params: {
      apikey: accuWeatherApiKey,
      q: params,
    },
  })
    .then((res) => {
      if (res.data.length !== 0) {
        setInfoIpLocation(res.data[0]);
      } else {
        fetchLocationByIp();
      }
    })
    .catch(() => {
      fetchLocationByIp();
    });
};
