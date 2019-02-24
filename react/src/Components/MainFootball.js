import React, { Component } from "react";
import PL from "./Football/pl";
import Result from "./Football/result";
import Fixture from "./Football/fixture";
import Table from "./Football/table";
import Team from "./Football/team";
import "../Styles/football.css";
class Main extends Component {
  render() {
    return (
      <div>
        <PL />
        <p> </p>
        <Result />
        <p> </p>
        <Fixture />
        <p> </p>
        <Table />
        <p> </p>
        <Team />
      </div>
    );
  }
}

export default Main;
