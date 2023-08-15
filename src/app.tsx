import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import { AppGeneralMobile } from "./ui/app-general-mobile/organelles/app-general-mobile";
import { Home } from "./pages/mobile/home/organelles/home";
import { Detail } from "./pages/mobile/detail/organelles/detail";
import { SearchHere } from "./ui/search-here/organelles/search-here";
import { askForGeolocationPermission } from "./functions/ask-permission/ask-for-geolocation-permission";
import { askForPushNotificationPermission } from "./functions/ask-permission/ask-for-push-notification-permission";

function App() {
  useEffect(() => {
    askForGeolocationPermission()
    askForPushNotificationPermission()
  }, [])
  return (
    <div className="App">
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
