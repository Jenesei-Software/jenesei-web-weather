import { AccuWeatherAxios } from "../axios-instance/axios-instance";
import { setForecastNow } from "../stores/info-forecast";

export const getForecastNowAccuWeather = async (
  locationKey: string,
  accuWeatherApiKey: string
) => {
  AccuWeatherAxios.get(`currentconditions/v1/${locationKey}`, {
    params: {
      apikey: accuWeatherApiKey,
      details: true,
    },
  })
    .then((res) => {
      setForecastNow(res.data);
    })
    .catch((error) => {
      throw error;
    });
};
