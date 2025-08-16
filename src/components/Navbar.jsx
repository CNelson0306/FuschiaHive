import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo_new.png";
import "../index.css";

export const Navbar = () => {
  //To toggle the hamburger menu open or closed
  //Below, className hamburgerOpen = true give class name "open"
  //If not give empty class name ""
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  {
    /*
  useEffect(() => {
    document.body.classList.toggle("menu-open", hamburgerOpen);
  }, [hamburgerOpen]);
    */
  }

  const closeMenu = () => {
    setHamburgerOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", hamburgerOpen);
    document.body.style.overflow = hamburgerOpen ? "hidden" : "";
  }, [hamburgerOpen]);

  return (
    <nav>
      <Link to="/" className="title" onClick={closeMenu}>
        <img src={logo} />
      </Link>

      <div
        className={`hamburger ${hamburgerOpen ? "open" : ""}`}
        onClick={() => {
          setHamburgerOpen(!hamburgerOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={hamburgerOpen ? "open" : ""}>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" onClick={closeMenu}>
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" onClick={closeMenu}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
