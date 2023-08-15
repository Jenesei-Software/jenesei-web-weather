import axios from "axios";

export const WEATHER_API_KEY = "8636b4c90b83435680e60959231508 ";
export const API_WEATHER_API = "https://api.weatherapi.com/";

export const ACCU_WEATHER_API_KEY = "h8kFz4u1VfjQOAoHHHPqiJfI29E2xUg7";
export const API_ACCU_WEATHER = "https://dataservice.accuweather.com/";

export const AccuWeatherAxios = axios.create({
  baseURL: API_ACCU_WEATHER,
});
export const WeatherApiAxios = axios.create({
  baseURL: API_WEATHER_API,
});
