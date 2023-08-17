import { createEvent, createStore } from "effector";

export const $showSearch = createStore<boolean>(false);
export const setShowSearch = createEvent<boolean>();
$showSearch.on(setShowSearch, (_, val) => val);

$showSearch.updates.watch((show: boolean) => {
  console.log("WATCH. showSearch show:", show);
});

export const changeShowSearch = () => {
  setShowSearch(!$showSearch.getState())
}