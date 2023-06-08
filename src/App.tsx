// import TailwindTest from "./page/TailwindTest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/main.css";

import PopupList from "./page/PopupList";
import PopupDetail from "./Components/PopupDetail";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/popupList" element={<PopupList />} />
          <Route path="/popupList/:id" element={<PopupDetail />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/popupList/2" element={</>}/> */}
          {/* <test></test> */}
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
