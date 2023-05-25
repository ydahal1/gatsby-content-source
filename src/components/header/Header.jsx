import React from "react";
import { navigate, Link } from "gatsby";
import { Input } from "antd";
import { BsMoonStars, BsBrightnessHigh } from "react-icons/bs";
import logoDark from "../../images/hpccsystems-logo-dark.png";
import logoLight from "../../images/hpccsystems-logo-light.png";
import "./Header.css";

const { Search } = Input;

const handleNavigation = (e) => {
  navigate(e.target.getAttribute("data-key"));
};

function Header() {
  return (
    <div className="header__appHeader">
      <div className="header__logo_container">
        <Link to={"/"}>
          <div className="header__logo_image">
            <img src={logoLight} alt="hpcc logo" />
          </div>
        </Link>
      </div>
      <div className="header__searchBar_container">
        <Search size="large" placeholder="search .." />
      </div>
      <div className="header__navLinks">
        <div className="header__navlink" onClick={handleNavigation} data-key="/learnECL/start">
          Learn ECL
        </div>
        <div className="header__navlink" onClick={handleNavigation} data-key="/projects">
          Projects
        </div>
        <div className="header__navlink" onClick={handleNavigation} data-key="/aboutUs">
          About Us
        </div>
        <div className="header__themeToggle">
          {/* <BsBrightnessHigh /> */}
          <BsMoonStars />
        </div>
      </div>
    </div>
  );
}

export default Header;
