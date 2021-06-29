// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
 
    prop = () =>{window.setTimeout((e) => 
    {
        this.props.onDelayedClick(e)},this.props.delay)
    }

    render ()
    {
        return (
        
        <button onClick={this.prop}></button>

               )
    }
}


export default DelayedButton