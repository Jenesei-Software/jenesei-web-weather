export const registerServiceWorker = async () => {
  try {
    if ("serviceWorker" in navigator) {
      const registration = await navigator.serviceWorker.register(
        "/sw.js"
      );
      console.log("Service Worker зарегистрирован:", registration);
    } else {
      console.log("Service Worker не поддерживается в данном браузере.");
    }
  } catch (error) {
    console.error("Ошибка при регистрации Service Worker:", error);
  }
};
