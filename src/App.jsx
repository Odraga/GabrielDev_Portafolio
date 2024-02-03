//Components
//import Sidebar from "./components/common/Navigationbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Routes/routes";

//Compoent

//import AboutUs from "./components/About/About";
import PreLoader from "./components/common/PreLoader";
import { useEffect, useState } from "react";
//import Timer from "./components/Timer/Timer";

const RouteWithNavbar = ({ element: Element, layout: Layout }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);
  return (
    <>
      {!show ? (
        <Layout>
          <Element />
        </Layout>
      ) : (
        <PreLoader />
      )}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.LandingPage.path}
          element={
            <RouteWithNavbar
              element={routes.LandingPage.component}
              layout={routes.LandingPage.layout}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
