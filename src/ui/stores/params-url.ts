import { createEvent, createStore } from "effector";
import { getLocationByParams } from "../get-location/get-location-by-params";
import { ACCU_WEATHER_API_KEY } from "../axiosInstance/axiosInstance";

export const $paramsURL = createStore<string | null>(null);
export const setParamsURL = createEvent<string | null>();
$paramsURL.on(setParamsURL, (_, val) => val);

$paramsURL.updates.watch((params: string | null) => {
  console.log("WATCH. paramsURL params:", params);
  if (params) getLocationByParams(params, ACCU_WEATHER_API_KEY);
});
