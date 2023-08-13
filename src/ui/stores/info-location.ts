import { createEvent, createStore } from "effector";

export interface IInfoLocation {
  label: string;
  type: string;
}
export const DEFAULT_INFO_LOCATION: IInfoLocation = {
  label: "Krasnoyarsk",
  type: "sun",
};
export const $infoLocation = createStore<IInfoLocation | null>(null);
export const setInfoLocation = createEvent<IInfoLocation | null>();
$infoLocation.on(setInfoLocation, (_, val) => val);

$infoLocation.updates.watch((info: IInfoLocation | null) => {
  console.log("WATCH. infoLocation info:", info);
});
