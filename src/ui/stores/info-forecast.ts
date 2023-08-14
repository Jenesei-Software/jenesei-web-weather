import { createEvent, createStore } from "effector";

export const $forecastNow = createStore<any | null>(null);
export const setForecastNow = createEvent<any | null>();
$forecastNow.on(setForecastNow, (_, val) => val);

export const $forecast1Day = createStore<any | null>(null);
export const setForecast1Day = createEvent<any | null>();
$forecast1Day.on(setForecast1Day, (_, val) => val);

export const $forecast10Days = createStore<any | null>(null);
export const setForecast10Days = createEvent<any | null>();
$forecast10Days.on(setForecast10Days, (_, val) => val);

export const $forecast1Hour = createStore<any | null>(null);
export const setForecast1Hour = createEvent<any | null>();
$forecast1Hour.on(setForecast1Hour, (_, val) => val);

export const $forecast24Hours = createStore<any | null>(null);
export const setForecast24Hours = createEvent<any | null>();
$forecast24Hours.on(setForecast24Hours, (_, val) => val);

$forecastNow.updates.watch((forecast: any | null) => {
  console.log("WATCH. forecastNow info:", forecast);
});

$forecast1Day.updates.watch((forecast: any | null) => {
  console.log("WATCH. forecast1Day info:", forecast);
});
$forecast10Days.updates.watch((forecast: any | null) => {
  console.log("WATCH. forecast10Days info:", forecast);
});
$forecast1Hour.updates.watch((forecast: any | null) => {
  console.log("WATCH. forecast1Hour info:", forecast);
});
$forecast24Hours.updates.watch((forecast: any | null) => {
  console.log("WATCH. forecast24Hours info:", forecast);
});
