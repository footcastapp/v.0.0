import React, { Component } from 'react';
class trophy extends Component {
    
    render() { 
        return (  
            <div className ="clubTrophies">
            
            <p key={this.props.i}>{this.props.club.Trophies}></p>
            
            </div>
        );
    }
}
 
export default trophy;