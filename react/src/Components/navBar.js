import React, { Component } from "react";
import "../Styles/nav.css";
import { NavLink } from "react-router-dom";

class navBar extends Component {
  render() {
    return (
      <ul id="menu">
        <NavLink to="/search" id="nav">
          <li className="item" id="search">
            Search
          </li>
        </NavLink>
        <NavLink to="/" id="nav">
          <li className="item" id="home">
            Home
          </li>
        </NavLink>
        <NavLink to="/football" id="nav">
          <li className="item" id="football">
            Football
          </li>
        </NavLink>
      </ul>
    );
  }
}

export default navBar;
