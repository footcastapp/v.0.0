import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <form>
        <input type="search" placeholder="search for teams and stadiums here" />
      </form>
    );
  }
}

export default SearchBar;
