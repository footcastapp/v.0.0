import React, { Component } from "react";

class result extends Component {
  render() {
    return (
      <div>
        <button className="buttonn" onClick={() => this.clickk()}>
          <div>
            <h1>Result</h1>
          </div>

          <p id="result">hgfdsxkjcsxckjhgfxa</p>
        </button>
      </div>
    );
  }
  clickk = () => {
    var g = document.getElementById("result");
    if (g.style.display === "block") {
      g.style.display = "none";
    } else {
      g.style.display = "block";
    }
  };
}

export default result;