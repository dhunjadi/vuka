import React, { useContext, useState } from "react";
import logo from "../../images/logo.png";
import { UserContext } from "../../context/UserContex";
import navbarList from "./navbarList";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const { loggedInUser } = useContext(UserContext);
  const [clicked, setClicked] = useState(false);

  const menuList = navbarList.map(({ title, url, icon }) => {
    return (
      <li key={uuidv4()}>
        <NavLink exact to={url} activeClassName="active">
          <img src={icon} alt={title} />
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="logo-container-nav">
        <img src={logo} alt="logo" />
        <h3>{loggedInUser.fName}</h3>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
    </nav>
  );
}
