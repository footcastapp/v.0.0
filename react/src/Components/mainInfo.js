import React, { Component } from "react";
import "../Styles/App.css";
import "../Styles/infoClubName.css";
import Info from "../Components/Football info/info";
import Trophies from "../Components/Football info/trophies";
import Manager from "../Components/Football info/manager";
import Stadium from "../Components/Football info/stadium";
class mainInfo extends Component {
  state = {};
  render() {
    return (
      <div>
        
        <Info/>
        <Trophies/>
        <Manager/>
        <Stadium/>
      </div>
    );
  }
}

export default mainInfo;
