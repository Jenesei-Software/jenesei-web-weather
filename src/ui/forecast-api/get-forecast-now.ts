import { AccuWeatherOne } from "../axiosInstance/axiosInstance";
import { setForecastNow } from "../stores/info-forecast";

export const getForecastNow = async (
  locationKey: string,
  accuWeatherApiKey: string
) => {
  AccuWeatherOne.get(`currentconditions/v1/${locationKey}`, {
    params: {
      apikey: accuWeatherApiKey,
      details:true,
    },
  })
    .then((res) => {
        setForecastNow(res.data);
    })
    .catch((error) => {
      throw error;
    });
};
