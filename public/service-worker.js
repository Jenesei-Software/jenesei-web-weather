self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

self.addEventListener("push", function (e) {
  console.log("puuuuuush");
  if (!(self.Notification && self.Notification.permission === "granted")) {
    //notifications aren't supported or permission not granted!
    console.log("nononono");
    return;
  }

  if (e.data) {
    let message = e.data.json();
    e.waitUntil(
      self.registration.showNotification(message.title, {
        body: message.body,
        icon: message.icon,
        actions: message.actions,
      })
    );
  }
});

self.addEventListener(
  "notificationclick",
  function (event) {
    event.notification.close();
  },
  false
);
