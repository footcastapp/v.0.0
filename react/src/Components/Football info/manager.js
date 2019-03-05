import React, { Component } from 'react';
import Manage from "./manage";
class manager extends Component {
  state = {};
  render() {
    return (
      <div className="clubManager">
        {this.props.managerName.map((obj, index) => {
          
          if (obj.Club.toLowerCase() === this.props.club.toLowerCase()) {
            
            return <Manage man={obj} key={index} i={index} />;
          }
        })}
      </div>
    );
  }
}

export default manager;
