import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import { AppGeneralMobile } from "./ui/app-general-mobile/organelles/app-general-mobile";
import { Home } from "./pages/mobile/home/organelles/home";
import { Detail } from "./pages/mobile/detail/organelles/detail";
import { SearchHere } from "./ui/search-here/organelles/search-here";
import { askForGeolocationPermission } from "./functions/ask-permission/ask-for-geolocation-permission";
import { askForPushNotificationPermission } from "./functions/ask-permission/ask-for-push-notification-permission";

import AppWallpaper from './assets/icon/wallpaper.svg'

/* 
TODO:Сrutch.
*/
document.addEventListener('touchmove', function (event: any) {
  event = event.originalEvent || event;
  if (event.scale !== 1) {
    event.preventDefault();
  }
}, false);

function App() {
  useEffect(() => {
    askForGeolocationPermission()
    askForPushNotificationPermission()
  }, [])
  return (
    <div className="App">
      <img src={AppWallpaper} className="App__Wallpaper" alt="App Wallpaper" />
      <SearchHere />
      <Routes>
        <Route path="/" element={<AppGeneralMobile />}>
          <Route index element={<Navigate to={`/home/`} />} />
          <Route path="*" element={<Navigate to={`/home/`} />} />
          <Route path="home">
            <Route path=":name" element={<Home />} />
            <Route index element={<Home />} />
          </Route>
          <Route path="detail" >
            <Route path=":name" element={<Detail />} />
            <Route index element={<Detail />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
