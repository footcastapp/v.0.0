import React, { Component } from "react";
import SearchBar from "./Search/SearchBar";
import "../Styles/Search.css";
import Clubs from "./Search/Clubs";
class Search extends Component {
  state = {};

  render() {
    return (
      <div>
        <Clubs />
        <SearchBar />
      </div>
    );
  }
}

export default Search;
