import React, { Component } from "react";
import "../Styles/nav.css";
import { NavLink } from "react-router-dom";
import home from "../Images/Homebutton.png";

class navBar extends Component {
  state = {};
  render() {
    return (
      <ul>
        <NavLink to="/search">
          <li id="search">Search</li>
        </NavLink>
        <NavLink to="/">
          <li id="home">
            <img src={home} alt="Home" />
          </li>
        </NavLink>
        <NavLink to="/football">
          <li id="football">Football</li>
        </NavLink>
      </ul>
    );
  }
}

export default navBar;
