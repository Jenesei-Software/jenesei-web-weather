import { createEvent, createStore } from "effector";

export const $infoIpWeather = createStore<any | null>(null);
export const setInfoWeather = createEvent<any | null>();
$infoIpWeather.on(setInfoWeather, (_, val) => val);

$infoIpWeather.updates.watch((info: any | null) => {
  console.log("WATCH. infoIpWeather info:", info);
});
