import { createEvent, createStore } from "effector";

export interface IInfoNotificationData {
  dt: string;
  label: string;
}

export interface IInfoNotification {
  data: IInfoNotificationData[];
}

export const $infoNotification = createStore<IInfoNotification | null>({
  data: [
    {
      dt: new Date().toString(),
      label: "Cold",
    },
  ],
});
export const setInfoNotification = createEvent<IInfoNotification | null>();
$infoNotification.on(setInfoNotification, (_, val) => val);

$infoNotification.updates.watch((info: IInfoNotification | null) => {
  console.log("WATCH. infoNotification info:", info);
});
