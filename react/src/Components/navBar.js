import React, { Component } from "react";
import "../Styles/nav.css";
import home from "../Assets/home1.jpg";

class navBar extends Component {
  state = {};
  render() {
    return (
      <ul>
        <li id="search">
          {" "}
          <a href="#">Search</a>
        </li>
        <li id="home">
          {" "}
          <a href="#">
            <img alt="home" src={home} />
          </a>
        </li>
        <li id="football">
          <a href="#">Football</a>
        </li>
      </ul>
    );
  }
}

export default navBar;
