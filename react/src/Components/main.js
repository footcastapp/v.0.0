import React, { Component } from "react";

import CurrentCity from "../Components/Main_screen_component/CurrentCity";
import StadiumInfo from "../Components/Main_screen_component/StadiumInfo";
class Main extends Component {
  state = {};
  render() {
    return (
      <div className="main-screen">
        <CurrentCity className="z-2" />
        <StadiumInfo className="z-2" />
      </div>
    );
  }
}

export default Main;
