import { AccuWeatherAxios } from "../axios-instance/axios-instance";
import { setForecast1Day } from "../stores/info-forecast";

export const getForecast1HourAccuWeather = async (
  locationKey: string,
  accuWeatherApiKey: string
) => {
  AccuWeatherAxios.get(`forecasts/v1/hourly/1hour/${locationKey}`, {
    params: {
      apikey: accuWeatherApiKey,
      metric: true,
    },
  })
    .then((res) => {
      setForecast1Day(res.data);
    })
    .catch((error) => {
      throw error;
    });
};
