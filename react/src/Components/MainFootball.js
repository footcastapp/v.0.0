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
      fixtureweek: [],
      tablee: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/week.txt")
      .then(res => res.json())
      .then(resultweek => this.setState({ resultweek }));

    fetch("http://localhost:5000/api/fixture.txt")
      .then(rses => rses.json())
      .then(fixtureweek => this.setState({ fixtureweek }));

    fetch("http://localhost:5000/api/table.json")
      .then(rses => rses.json())
      .then(tablee => this.setState({ tablee }));
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
        <Table table={this.state.tablee} />
        <p> </p>
        <Team />
      </div>
    );
  }
}

export default Main;
