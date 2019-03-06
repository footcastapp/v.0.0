import React, { Component } from "react";
import PL from "./Football/pl";
import Result from "./Football/result";
import Fixture from "./Football/fixture";
import Table from "./Football/table";
import Team from "./Football/team";
import "../Styles/football.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      resultweek: [],
      fixtureweek: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/week.txt")
      .then(res => res.json())
      .then(resultweek => this.setState({ resultweek }));

    fetch("http://localhost:5000/api/fixture.txt")
      .then(rses => rses.json())
      .then(fixtureweek => this.setState({ fixtureweek }));
  }
  render() {
    return (
      <div>
        <PL />
        <p> </p>
        <Result result={this.state.resultweek} />

        <p> </p>
        <Fixture fixture={this.state.fixtureweek} />
        <p> </p>
        <Table />
        <p> </p>
        <Team />
      </div>
    );
  }
}

export default Main;
