import { Navigate, Route, Routes } from "react-router-dom";
import { AppGeneralMobile } from "./ui/app-general-mobile/organelles/app-general-mobile";
import { Home } from "./pages/mobile/home/organelles/home";
import { Detail } from "./pages/mobile/detail/organelles/detail";

function App() {
  return (
    <div className="App">
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
