import { routes } from "../../Routes/routes";

const Sidebar = () => {
  return (
    <header className="container-sm container-md container-lg">
      <nav>
        <a className="navbar-brand" href="#">
          GABRIEL DEV
        </a>
        <ul className="navbar">
          <li className="navbar-item">
            <a href={routes.Home.path}>Home</a>
          </li>
          <li className="navbar-item">
            <a href={routes.Timer.path}>Timer</a>
          </li>
          <li className="navbar-item">
            <a href={routes.AboutUs.path}>About</a>
          </li>
          <li className="navbar-item">
            <a href={routes.AboutUs.path}>Proyects</a>
          </li>
          <li className="navbar-item">
            <a href={routes.AboutUs.path}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
