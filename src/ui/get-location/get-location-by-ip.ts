import {
  ACCU_WEATHER_API_KEY,
  AccuWeatherOne,
} from "../axiosInstance/axiosInstance";

import { getIp } from "../get-ip/get-ip";
import { setInfoIpLocation } from "../stores/info-location";

export const getLocationByIp = async (
  userIp: string,
  accuWeatherApiKey: string
) => {
  AccuWeatherOne.get("locations/v1/cities/ipaddress/", {
    params: {
      apikey: accuWeatherApiKey,
      q: userIp,
    },
  })
    .then((res) => {
      setInfoIpLocation(res.data);
    })
    .catch((error) => {
      throw error;
    });
};

export const fetchLocationByIp = async () => {
  const userIp = await getIp();
  getLocationByIp(userIp, ACCU_WEATHER_API_KEY);
};
