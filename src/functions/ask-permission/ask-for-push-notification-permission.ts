export const askForPushNotificationPermission = async () => {
  try {
    const permissionResult = await Notification.requestPermission();

    if (permissionResult === "granted") {
      console.log("Разрешение на пуш-уведомления получено.");
    } else if (permissionResult === "denied") {
      console.log("Разрешение на пуш-уведомления отклонено.");
    } else {
      console.log("Разрешение на пуш-уведомления не получено.");
    }
  } catch (error) {
    console.error("Ошибка при запросе разрешения на пуш-уведомления:", error);
  }
};
