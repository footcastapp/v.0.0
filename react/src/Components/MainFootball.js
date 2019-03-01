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
      resultweek: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/week.json")
      .then(res => res.json())
      .then(resultweek => this.setState({ resultweek }));
  }
  render() {
    console.log(this.state.resultWeek);
    return (
      <div>
        <PL />
        <p> </p>
        <Result result={this.state.resultweek} key={0} />
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
