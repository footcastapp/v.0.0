import React, { Component } from "react";
import CurrentCity from "./Main_screen_component/CurrentCity";

class Main extends Component {
  render() {
    return (
      <div className="main-screen">
        <CurrentCity id="top-container" className="z-2" />
      </div>
    );
  }
}

export default Main;
