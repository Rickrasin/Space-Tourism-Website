import { NavLink } from "react-router-dom";
import { useState } from "react";

import { Nav } from "./Navbar.style";
import Burguer from "../../assets/shared/icon-hamburger.svg";
import Close from "../../assets/shared/icon-close.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  return (
    <Nav>
      <div className="line-container">
        <div className="Line" />
      </div>
      <div
        className="hamburguer"
        onClick={toggleNavbar}
      >
        <img src={Burguer} />
      </div>
      <div className={`navbar ${isActive ? "active" : ""}`}>
        <div
          className="close"
          onClick={toggleNavbar}
        >
          <img src={Close} />
        </div>
        <nav>
          <NavLink
            to="/"
            className="navbar-item"
          >
            <div className="navbar-item-content">
              <b>00</b> Home
            </div>
          </NavLink>
          <NavLink
            to="/Destination"
            className="navbar-item"
          >
            <div className="navbar-item-content">
              <b>01</b> Destination
            </div>
          </NavLink>
          <NavLink
            to="/Crew"
            className="navbar-item"
          >
            {" "}
            <div className="navbar-item-content">
              <b>02</b> Crew
            </div>
          </NavLink>
          <NavLink
            to="/Technology"
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
