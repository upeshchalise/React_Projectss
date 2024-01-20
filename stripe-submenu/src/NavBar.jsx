/* eslint-disable no-unused-vars */
// import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
const NavBar = () => {
  const { openSideBar, openSubMenu, closeSubMenu } = useGlobalContext();
  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const button = tempBtn.button - 3;
    openSubMenu(page, { center, button });
  };

  const handleDisplay = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubMenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleDisplay}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li onMouseOver={displaySubMenu}>
            <button className="link-btn">products</button>
          </li>
          <li onMouseOver={displaySubMenu}>
            <button className="link-btn">developers</button>
          </li>
          <li onMouseOver={displaySubMenu}>
            <button className="link-btn">company</button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default NavBar;
