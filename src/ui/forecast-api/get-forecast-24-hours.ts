import { AccuWeatherOne } from "../axiosInstance/axiosInstance";
import { setForecast24Hours } from "../stores/info-forecast";

export const getForecast24Hours = async (
  locationKey: string,
  accuWeatherApiKey: string
) => {
  AccuWeatherOne.get(`forecasts/v1/hourly/24hour/${locationKey}`, {
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
