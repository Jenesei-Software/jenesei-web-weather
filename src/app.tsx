import { Navigate, Route, Routes } from "react-router-dom";
import { AppGeneralMobile } from "./ui/app-general-mobile/organelles/app-general-mobile";
import { Home } from "./pages/mobile/home/organelles/home";
import { Detail } from "./pages/mobile/detail/organelles/detail";
import useIsMobileDevice from "./ui/use-is-mobile-device/organelles/use-is-mobile-device";
import { DEFAULT_INFO_LOCATION } from "./ui/stores/info-location";

function App() {
  const isMobile = useIsMobileDevice()
  return (
    <div className="App">
      <Routes>
        {isMobile ?
          <Route path="/" element={<AppGeneralMobile />}>
            <Route index element={<Navigate to={`/home/${DEFAULT_INFO_LOCATION.label}`} />} />
            <Route path="*" element={<Navigate to={`/home/${DEFAULT_INFO_LOCATION.label}`} />} />
            <Route path="home">
              <Route path=":name" element={<Home />} />
            </Route>
            <Route path="detail" >
              <Route path=":name" element={<Detail />} />
            </Route>
          </Route>
          :
          <Route>
            <Route path="/">
              Go mama
            </Route>
          </Route>
        }
      </Routes>
    </div>
  )
}

export default App
