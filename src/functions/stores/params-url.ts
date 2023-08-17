import { createEvent, createStore } from "effector";
// import { getLocationByParamsAccuWeather } from "../get-location/get-location-by-params";
// import { ACCU_WEATHER_API_KEY } from "../axios-instance/axios-instance";

export const $paramsURL = createStore<string | null>(null);
export const setParamsURL = createEvent<string | null>();
$paramsURL.on(setParamsURL, (_, val) => val);

$paramsURL.updates.watch((params: string | null) => {
  console.log("WATCH. paramsURL params:", params);
  // if (params) getLocationByParamsAccuWeather(params, ACCU_WEATHER_API_KEY);
});
