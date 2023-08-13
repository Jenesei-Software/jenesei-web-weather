import { createEvent, createStore } from "effector";

export const $showNotification = createStore<boolean>(true);
export const setShowNotification = createEvent<boolean>();
$showNotification.on(setShowNotification, (_, val) => val);

$showNotification.updates.watch((show: boolean) => {
  console.log("WATCH. infoNotification show:", show);
});
