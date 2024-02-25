import { NavLink } from "react-router-dom";

import { Nav } from "./Navbar.style";
import Burguer from "../../assets/shared/icon-hamburger.svg";

const Navbar = () => {
  return (
    <Nav>
      <div className="line-container">
        <div className="Line" />
      </div>
      <div className="hamburguer">
        <img src={Burguer} />
      </div>
      <div className="navbar">
        <nav>
          <NavLink
            to="/Space-Tourism-Website/"
            className="navbar-item"
          >
            <div className="navbar-item-content">
              <b>00</b> Home
            </div>
          </NavLink>
          <NavLink
            to="/Space-Tourism-Website/Destination"
            className="navbar-item"
          >
            <div className="navbar-item-content">
              <b>01</b> Destination
            </div>
          </NavLink>

          <NavLink
            to="/Space-Tourism-Website/Crew"
            className="navbar-item"
          >
            {" "}
            <div className="navbar-item-content">
              <b>02</b> Crew
            </div>
          </NavLink>
          <NavLink
            to="/Space-Tourism-Website/Technology"
            className="navbar-item"
          >
            <div className="navbar-item-content">
              <b>03</b> Technology
            </div>
          </NavLink>
        </nav>
      </div>
    </Nav>
  );
};

export default Navbar;
