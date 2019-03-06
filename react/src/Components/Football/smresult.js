import React, { Component } from "react";

class smresult extends Component {
  state = {};

  render() {
    var a = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";

    return (
      <div>
        {this.props.lol.Matchday.a.map((obj, i) => (
          <div>
            <p key={i} className="re">
              {obj.Home}
            </p>
            <p key={i} className="ra">
              {obj.Score}
            </p>
            <p key={i} className="ro">
              {obj.Away}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default smresult;
