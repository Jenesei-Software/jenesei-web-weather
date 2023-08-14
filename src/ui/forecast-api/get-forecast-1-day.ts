import { AccuWeatherOne } from "../axiosInstance/axiosInstance";
import { setForecast1Day } from "../stores/info-forecast";

export const getForecast1Day = async (
  locationKey: string,
  accuWeatherApiKey: string
) => {
  AccuWeatherOne.get(`forecasts/v1/daily/1day/${locationKey}`, {
    params: {
      apikey: accuWeatherApiKey,
    },
  })
    .then((res) => {
      setForecast1Day(res.data);
    })
    .catch((error) => {
      throw error;
    });
};
