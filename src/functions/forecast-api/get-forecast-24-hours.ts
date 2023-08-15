import { AccuWeatherAxios } from "../axios-instance/axios-instance";
import { setForecast24Hours } from "../stores/info-forecast";

export const getForecast24HoursAccuWeather = async (
  locationKey: string,
  accuWeatherApiKey: string
) => {
  AccuWeatherAxios.get(`forecasts/v1/hourly/24hour/${locationKey}`, {
    params: {
      apikey: accuWeatherApiKey,
      locationKey: locationKey,
    },
  })
    .then((res) => {
      setForecast24Hours(res.data);
    })
    .catch((error) => {
      throw error;
    });
};
