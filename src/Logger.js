import React, { Component } from 'react';

class Logger extends Component{

    render(){
        return(
            <h1>{this.props.time}</h1>
        )
    }
}
export default Logger;
