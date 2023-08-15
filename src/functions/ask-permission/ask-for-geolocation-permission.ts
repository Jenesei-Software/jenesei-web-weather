import {
  IInfoPermissionLocation,
  setInfoPermissionLocation,
} from "../stores/info-location";

export const DEFAULT_COORDS: IInfoPermissionLocation = {
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
        setInfoPermissionLocation(coords);
        console.log("Получены координаты:", coords);
      },
      (error) => {
        setInfoPermissionLocation(DEFAULT_COORDS);
        console.log("Ошибка получения геопозиции:", error.message);
      }
    );
  } else {
    setInfoPermissionLocation(DEFAULT_COORDS);
    console.log("Геолокация не поддерживается этим браузером.");
  }
};
