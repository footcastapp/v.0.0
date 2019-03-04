import React, { Component } from "react";
import Clubs from "./Clubs";
class SearchBar extends Component {
  state = { clubInfo: [], search: "" };
  render() {
    let clubs = this.state.clubInfo.filter(club => {
      return (
        (club.Stadium.Name.toLowerCase().indexOf(
          this.state.search.toLowerCase()
        ) &&
          club.Club.toLowerCase().indexOf(this.state.search.toLowerCase())) !==
        -1
      );
    });
    return (
      <div className="mainDiv">
        <Clubs clubInfo={clubs} />
        <input
          type="search"
          placeholder="Search"
          onChange={this.search.bind(this)}
        />
        {this.props.clubInfo.Club}
      </div>
    );
  }
  search(event) {
    this.setState({ clubInfo: this.props.clubInfo });
    this.setState({ search: event.target.value });
    if (event.target.value === "") {
      this.setState({ clubInfo: [] });
    }
  }
}

export default SearchBar;
