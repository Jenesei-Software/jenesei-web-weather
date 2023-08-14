import axios from "axios";

export const ACCU_WEATHER_API_KEY = "h8kFz4u1VfjQOAoHHHPqiJfI29E2xUg7";
export const API_ACCU_WEATHER = "http://dataservice.accuweather.com/";
export const ApiThree = "";
export const AccuWeatherOne = axios.create({
  baseURL: API_ACCU_WEATHER,
});
// export const axiosInstanceTwo = axios.create({
//   baseURL: ApiTwo,
// });
export const axiosInstanceThree = axios.create({
  baseURL: ApiThree,
});
