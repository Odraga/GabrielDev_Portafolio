import { routes } from "../../Routes/routes";
import catIcon from "../../assets/photos/cat.png";

const Navigationbar = () => {
  return (
    <header className="container-sm container-md container-lg mt-0 mb-3 py-2">
      <nav className="m-0 p-0">
        <h2 className="m-0 p-0 d-inline">
          <a className="navbar-brand transition-color-1 mb-3 mt-0" href="#">
            <img src={catIcon} width={"32px"} alt="" />
            GABRIEL DEV
          </a>
        </h2>

        {/* <div className="navbar d-sm-none">
          <button className="button-toggle bgc-black rounded-5">ABRIR</button>
        </div> */}

        <ul
          className="navbar d-none d-md-flex m-0 p-0"
          style={{ backgroundColor: "rgb(215, 190, 168)" }}
        >
          {/* <li className="navbar-item transition-color-1">
            <a href={routes.LandingPage.path} className="transition-color-1">
              Home
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navigationbar;
