
import { AccuWeatherOne } from "../axiosInstance/axiosInstance";
import { setForecast10Days } from "../stores/info-forecast";

export const getForecast10Days = async (
  locationKey: string,
  accuWeatherApiKey: string
) => {
  AccuWeatherOne.get(`forecasts/v1/daily/10day/${locationKey}`, {
    params: {
      apikey: accuWeatherApiKey,
    },
  })
    .then((res) => {
        setForecast10Days(res.data);
    })
    .catch((error) => {
      throw error;
    });
};