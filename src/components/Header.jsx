import React from "react";
import { Layout, Menu, Switch, Input } from "antd";
import { BsMoonStars, BsBrightnessHigh } from "react-icons/bs";
import { Link } from "gatsby";
import logoDark from "../images/hpccsystems-logo-dark.png";
import logoLight from "../images/hpccsystems-logo-light.png";

const { Header } = Layout;
const { Search } = Input;

function SiteHeader({ isDarkMode, setIsDarkMode }) {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        background: isDarkMode ? "#141414" : "#FFFFFF",
        height: "70px",
        borderBottom: "1px solid #C8C9C7",
        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="demo-logo" style={{ maxWidth: "100%", height: "100%" }}>
        <Link to={"/"}>
          <img
            src={isDarkMode === "dark" ? logoDark : logoLight}
            // src={logoDark}
            alt="hpcc logo"
            style={{ maxWidth: "auto", height: "100%", padding: "10px" }}
          />
        </Link>
      </div>
      <Menu mode="horizontal" className="header__menu" theme="light" overflow style={{ background: "none", marginLeft: "40px" }}>
        <Menu.Item style={{ width: "25%" }} className="header__menuItem">
          <Link to="/projects">Products</Link>
        </Menu.Item>
        <Menu.Item style={{ width: "25%" }}>Learn ECL</Menu.Item>
        <Menu.Item style={{ width: "25%" }}>About us</Menu.Item>
      </Menu>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }} className="header__items_right">
        <Search
          placeholder="search .."
          style={{
            width: 200,
          }}
        />
        <Switch
          checkedChildren={<BsBrightnessHigh />}
          defaultChecked={false}
          unCheckedChildren={<BsMoonStars />}
          onChange={() => setIsDarkMode(!isDarkMode)}
        />
      </div>
    </Header>
  );
}

export default SiteHeader;

// Set to local storage the status
// Add logo swither
// Change nav bar color o mode switch
// Hover effect on menu items
// Apply style on switcher
// Add some itms in switcher
// Index page add place holder image and some  text
// Make Contact and learn ecl work
