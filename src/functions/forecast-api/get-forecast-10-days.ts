
import { AccuWeatherAxios } from "../axios-instance/axios-instance";
import { setForecast10Days } from "../stores/info-forecast";

export const getForecast10DaysAccuWeather = async (
  locationKey: string,
  accuWeatherApiKey: string
) => {
  AccuWeatherAxios.get(`forecasts/v1/daily/10day/${locationKey}`, {
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