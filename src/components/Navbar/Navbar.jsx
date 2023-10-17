import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import { Nav } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav>
      <nav className="navbar">
        <NavLink to="/" activeClassName="active" className="navbar-item">
          <p>
            <span>00</span> Home
          </p>
        </NavLink>
        <NavLink
          to="/Destination"
          activeClassName="active"
          className="navbar-item"
        >
          <p>
            <span>01</span> Destination
          </p>
        </NavLink>

        <NavLink to="/Crew" activeClassName="active" className="navbar-item">
          <p>
            <span>02</span> Crew
          </p>
        </NavLink>
        <NavLink
          to="/Technology"
          activeClassName="active"
          className="navbar-item"
        >
          <p>
            <span>03</span> Technology
          </p>
        </NavLink>
      </nav>
    </Nav>
  );
};

export default Navbar;
