import { AccuWeatherAxios } from "../axios-instance/axios-instance";
import {
  setInfoSearchResult,
  setInfoSearchResultCheck,
} from "../stores/info-search-result";

export const getLocationBySearchAccuWeather = async (
  params: string,
  accuWeatherApiKey: string
) => {
  AccuWeatherAxios.get("locations/v1/cities/search/", {
    params: {
      apikey: accuWeatherApiKey,
      q: params,
    },
  })
    .then((res) => {
      if (res.data) {
        setInfoSearchResult(res.data);
        setInfoSearchResultCheck(false);
      }
    })
    .catch(() => {
      setInfoSearchResult([]);
      setInfoSearchResultCheck(false);
    });
};
