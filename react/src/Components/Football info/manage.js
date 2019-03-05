import React, { Component } from 'react';
class manage extends Component {
    
    render() {
        console.log(this.props.man.History.Manager.FullName); 
        return (<div key = {this.props.i}>
        
            <p> Manager Name : {this.props.man.History.Manager.FullName}</p>
            <p>Nationality : {this.props.man.History.Manager.Nationality}</p>
            <p>Date of Birth : {this.props.man.History.Manager.DOB}</p>
            
        </div>  );
    }
}
 
export default manage;