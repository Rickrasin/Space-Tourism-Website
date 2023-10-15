import { NavLink } from "react-router-dom";

import { Nav } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav>
      <nav className="navbar">
        <NavLink to="/" activeClassName="active" className="navbar-item">
          <span>00</span>
          Home
        </NavLink>
        <NavLink
          to="/Destination"
          activeClassName="active"
          className="navbar-item"
        >
          <span>01</span>
          Destination
        </NavLink>
        <NavLink to="/Crew" activeClassName="active" className="navbar-item">
          <span>02</span>
          Crew
        </NavLink>
        <NavLink
          to="/Technology"
          activeClassName="active"
          className="navbar-item"
        >
          <span>03</span>
          Technology
        </NavLink>
      </nav>
    </Nav>
  );
};

export default Navbar;
