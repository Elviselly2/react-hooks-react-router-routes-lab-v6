
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/directors" end>
        Directors
      </NavLink>
      <NavLink to="/actors" end>
        Actors
      </NavLink>
    </nav>
  );
}

export default NavBar;
