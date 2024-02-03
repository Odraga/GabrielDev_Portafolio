//import { routes } from "../../Routes/routes";

const Navigationbar = () => {
  return (
    <header className="container-sm container-md container-lg">
      <nav className="my-3">
        {/* <h2>
          <a className="navbar-brand transition-color-1 mb-3" href="#">
            GABRIEL DEV
          </a>
        </h2> */}

        <div className="navbar d-sm-none">
          <button className="button-toggle bgc-black rounded-5">ABRIR</button>
        </div>

        <ul className="navbar d-none d-md-flex">
          {/* <li className="navbar-item transition-color-1">
            <a href={routes.Home.path} className="transition-color-1">
              Home
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navigationbar;
