import React, { Component } from "react";
class trophy extends Component {
  render() {
    return (
      <div className="clubTrophies">
        {this.props.eltrophy.History.Trophies.map((obj, index) => {
          console.log(obj);
          if (obj.exists === true) {
            let blah = "";
            let cara = "";
            let fa = "";
            let com = "";
            
            
            if (obj.name === "PremierLeague") {
              blah = (
                <img
                  className="image2"
                  src="http://localhost:5000/static/trophy/premier.png"
                />
              );
            }
            if (obj.name === "EFLChampionship") {
              cara = (
                <img
                  className="image2"
                  src="http://localhost:5000/static/trophy/carabao.png"
                />
              );
            }
            if (obj.name === "FA") {
              fa = (
                <img
                  className="image2"
                  src="http://localhost:5000/static/trophy/fa.png"
                />
              );
            }
            if (obj.name === "FACommunityShield") {
              com = (
                <img
                  className="image2"
                  src="http://localhost:5000/static/trophy/com.png"
                />
              );
            }
            

            return (
                <div className="indiTrophy">
                   <label>{obj.name}</label>
                   <p>{obj.won}</p>
                   {blah}
                   {cara}
                   {fa}
                   {com}
                </div>
             
            );
          }
        })}
      </div>
    );
  }
}

export default trophy;
