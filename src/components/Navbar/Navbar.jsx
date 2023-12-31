import { NavLink } from "react-router-dom";

import { Nav } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav>
      <div className="line-container">
        <div className="Line" />
      </div>
      <div className="navbar">
        <nav>
          <NavLink
            to="/"
            className={`navbar-item ${(navData) =>
              navData.isActive ? "active" : "none"}`}
          >
            <div className="navbar-item-content">
              <b>00</b> Home
            </div>
          </NavLink>
          <NavLink
            to="/Destination"
            className={`navbar-item ${(navData) =>
              navData.isActive ? "active" : "none"}`}
          >
            <div className="navbar-item-content">
              <b>01</b> Destination
            </div>
          </NavLink>

          <NavLink
            to="/Crew"
            className={`navbar-item ${(navData) =>
              navData.isActive ? "active" : "none"}`}
          >
            <div className="navbar-item-content">
              <b>02</b> Crew
            </div>
          </NavLink>
          <NavLink
            to="/Technology"
            className={`navbar-item ${(navData) =>
              navData.isActive ? "active" : "none"}`}
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
