import { createEvent, createStore } from "effector";

export const $infoSearchResultCheck = createStore<boolean>(false);
export const setInfoSearchResultCheck = createEvent<boolean>();
$infoSearchResultCheck.on(setInfoSearchResultCheck, (_, val) => val);

export const $infoSearchResult = createStore<any | null>(null);
export const setInfoSearchResult = createEvent<any | null>();
$infoSearchResult.on(setInfoSearchResult, (_, val) => val);

$infoSearchResult.updates.watch((info: any | null) => {
  console.log("WATCH. infoSearchResult info:", info);
});

$infoSearchResultCheck.updates.watch((info: any | null) => {
  console.log("WATCH. infoSearchResultCheck info:", info);
});