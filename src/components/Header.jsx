import React, { useContext, useState } from "react";
import { Layout, Menu, Switch, Input } from "antd";
import { BsMoonStars, BsBrightnessHigh } from "react-icons/bs";
import { navigate, Link } from "gatsby";
import logoDark from "../images/hpccsystems-logo-dark.png";
import logoLight from "../images/hpccsystems-logo-light.png";
// import { globalContext } from "./ContextProvider/ContextProvider";

const { Header } = Layout;
const { Search } = Input;

const menuItems = [
  { label: "Products", key: "/projects" },
  { label: "Learn ECL", key: "/learnECL/start" },
  { label: "About US", key: "/aboutUs" },
];

function SiteHeader({ appTheme, setAppTheme }) {
  const handleNavigation = (e) => {
    navigate(e.key);
  };

  const changeTheme = () => {
    if (appTheme === "dark") {
      setAppTheme("light");
    } else {
      setAppTheme("dark");
    }
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        background: appTheme === "dark" ? "#141414" : "#FFFFFF",
        height: "70px",
        borderBottom: "1px solid #C8C9C7",
        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="demo-logo" style={{ maxWidth: "100%", height: "100%" }}>
        <Link to={"/"}>
          <img
            src={appTheme === "dark" ? logoDark : logoLight}
            // src={logoDark}
            alt="hpcc logo"
            style={{ maxWidth: "auto", height: "100%", padding: "10px" }}
          />
        </Link>
      </div>
      <Menu
        mode="horizontal"
        className="header__menu"
        theme="light"
        style={{ background: "none", marginLeft: "40px" }}
        items={menuItems}
        onClick={handleNavigation}
      ></Menu>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }} className="header__items_right">
        <Search
          placeholder="search .."
          style={{
            width: 200,
          }}
        />
        <Switch checkedChildren={<BsBrightnessHigh />} defaultChecked={false} unCheckedChildren={<BsMoonStars />} onChange={changeTheme} />
      </div>
    </Header>
  );
}

export default SiteHeader;

//TODO
// Set to local storage the status
// Add logo swither
// Change nav bar color o mode switch
// Hover effect on menu items
// Apply style on switcher
// Add some itms in switcher
// Index page add place holder image and some  text
// Make Contact and learn ecl work
// When you switch to different page, make sure the switch icon is correctly switched
