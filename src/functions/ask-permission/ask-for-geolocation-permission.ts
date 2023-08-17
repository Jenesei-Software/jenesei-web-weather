import {
  IInfoLatLon,
  setInfoLatLon,
} from "../stores/info-location";

export const DEFAULT_COORDS: IInfoLatLon = {
  latitude: null,
  longitude: null,
};
export const askForGeolocationPermission = async () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setInfoLatLon(coords);
        console.log("Получены координаты:", coords);
      },
      (error) => {
        setInfoLatLon(DEFAULT_COORDS);
        console.log("Ошибка получения геопозиции:", error.message);
      }
    );
  } else {
    setInfoLatLon(DEFAULT_COORDS);
    console.log("Геолокация не поддерживается этим браузером.");
  }
};
