import { createEvent, createStore } from "effector";

export const $infoSearchResultCheck = createStore<boolean>(false);
export const setInfoSearchResultCheck = createEvent<boolean>();
$infoSearchResultCheck.on(setInfoSearchResultCheck, (_, val) => val);

export const $infoSearchResult = createStore<any | null>([]);
export const setInfoSearchResult = createEvent<any | null>();
$infoSearchResult.on(setInfoSearchResult, (_, val) => val);

$infoSearchResult.updates.watch((info: any | null) => {
  console.log("WATCH. infoSearchResult info:", info);
  if (info.length == 0 || info == null) setInfoSearchResultCheck(false);
});

$infoSearchResultCheck.updates.watch((info: boolean) => {
  console.log("WATCH. infoSearchResultCheck info:", info);
});
