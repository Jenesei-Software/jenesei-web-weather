import { createEvent, createStore } from "effector";
import { ACCU_WEATHER_API_KEY } from "../axiosInstance/axiosInstance";
import { getForecastNow } from "../forecast-api/get-forecast-now";

export const $infoIpLocation = createStore<any | null>(null);
export const setInfoIpLocation = createEvent<any | null>();
$infoIpLocation.on(setInfoIpLocation, (_, val) => val);

$infoIpLocation.updates.watch((info: any | null) => {
  console.log("WATCH. infoIpLocation info:", info);
  if (info) {
    getForecastNow(info?.Key, ACCU_WEATHER_API_KEY);
  }
});
