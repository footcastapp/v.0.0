import React, { Component } from "react";
import SearchBar from "./Search/SearchBar";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      clubInfo: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/Clubs.json")
      .then(res => res.json())
      .then(clubInfo => this.setState({ clubInfo }));
  }

  render() {
    return (
      <div>
        <SearchBar clubInfo={this.state.clubInfo} />
      </div>
    );
  }
}

export default Search;
