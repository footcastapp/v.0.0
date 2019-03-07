import React, { Component } from 'react';
import Daily from './DailyComponent'

class DailyWeather extends Component {
    state = {  }
    render() { 
        return ( <div>
            
           <Daily day = {} weather = {} min = {} max = {}/>
        </div> );
    }
}
 
export default DailyWeather;