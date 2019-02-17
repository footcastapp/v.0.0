import React, { Component } from "react";
import "./Styles/App.css";
import Main from "./Components/main";
import Search from "./Components/SearchBar";
import Error from "./Components/error";
import NavBar from "./Components/navBar";
import Football from "./Components/football";
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
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
