//Components
import Sidebar from "./components/common/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Routes/routes";

//Compoent

import Home from "./components/Home/Home";
import AboutUs from "./components/About/About";
import PreLoader from "./components/common/PreLoader";
import { useEffect, useState } from "react";

const RouteWithSidebar = ({ element: Element }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);
  return (
    <>
      <div id={"reset-this-root"}>
        {!show ? (
          <>
            <Sidebar />
            <div className="container-md container-lg mt-0 mb-0">
              <Element />
            </div>
          </>
        ) : (
          <PreLoader />
        )}
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.Home.path}
          element={<RouteWithSidebar element={Home} />}
        />
        <Route
          path={routes.AboutUs.path}
          element={<RouteWithSidebar element={AboutUs} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
