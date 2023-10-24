import { routes } from "../../Routes/routes";

const Sidebar = () => {
  return (
    <header className="container-sm container-md container-lg">
      <nav className="my-3">
        <a className="navbar-brand transition-color-1" href="#">
          GABRIEL DEV
        </a>

        <div className="navbar d-sm-none">
          <button className="button-toggle bgc-black rounded-5">ABRIR</button>
        </div>

        <ul className="navbar d-none d-md-flex">
          <li className="navbar-item transition-color-1">
            <a href={routes.Home.path} className="transition-color-1">
              Home
            </a>
          </li>
          <li className="navbar-item transition-color-1">
            <a href={routes.Timer.path} className="transition-color-1">
              Timer
            </a>
          </li>
          <li className="navbar-item ">
            <a href={routes.AboutUs.path} className="transition-color-1">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href={routes.AboutUs.path} className="transition-color-1">
              Proyects
            </a>
          </li>
          <li className="navbar-item ">
            <a href={routes.AboutUs.path} className="transition-color-1">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
