import React, { Component } from "react";
import "../Styles/nav.css";
import { NavLink } from "react-router-dom";
import home from "../Assets/home1.jpg";

class navBar extends Component {
  state = {};
  render() {
    return (
      <ul>
        <li id="search">
          <NavLink to="/search">Search</NavLink>
        </li>
        <li id="home">
          <NavLink to="/">
            <img src={home} alt="home" />
          </NavLink>
        </li>
        <li id="football">
          <NavLink to="football">Football</NavLink>
        </li>
      </ul>
    );
  }
}

export default navBar;
