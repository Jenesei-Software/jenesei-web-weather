import { AccuWeatherAxios } from "../axios-instance/axios-instance";
import { setForecast1Day } from "../stores/info-forecast";

export const getForecast1DayAccuWeather = async (
  locationKey: string,
  accuWeatherApiKey: string
) => {
  AccuWeatherAxios.get(`forecasts/v1/daily/1day/${locationKey}`, {
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
