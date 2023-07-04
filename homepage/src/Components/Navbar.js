import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import arrow from "../images/right arrow.svg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarLinks">
        <Link to="/" className="homeLinks">
          <img
            src={logo}
            className="companyNavbarLogo"
            alt="Docplanner Group"
          />
          <p className="companyHomeLink">Dropbox</p>
        </Link>

        <div className="navbarmiddlecontainer">
          <button className="navbarbutton">Why Dropbox?</button>
          <button className="navbarbutton">Products</button>
          <button className="navbarbutton">Solutions</button>
          <div>
            <Link to="/" className="pricingLinkTag">
              Pricing
            </Link>
          </div>
        </div>

        <div className="navbarRight">
          <Link to="/" className="navbarRightLink">
            Contact
          </Link>
          <Link to="/" className="navbarRightLink">
            Getapp
          </Link>
          <Link to="/" className="navbarRightLink">
            Signup
          </Link>
          <Link to="/" className="navbarRightLink">
            Login
          </Link>
          <Link to="/" className="getStartedLink">
            <div>
              <p className="getStartedLinkText">Get started</p>

              <img src={arrow} alt="arrow" className="getStartedRightarrow" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
