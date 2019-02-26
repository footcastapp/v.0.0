import React, { Component } from "react";
import "./Styles/App.css";
import Main from "./Components/main";
import Search from "./Components/Search";
import Error from "./Components/error";
import NavBar from "./Components/navBar";
import Football from "./Components/MainFootball";
import Club from "./Components/mainInfo";
import "../src/Styles/nav.css";
import "../src/Styles/main.css";
import "../src/Styles/InfoComponent.css";
import "../src/Styles/StadiumInfo.css";
import "./Styles/Search.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/search" component={Search} />
            <Route path="/football" component={Football} />
            <Route path="/club" component={Club} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
