import React from 'react';
import './css/print.css';
import {MyButton} from './MyButton.js';
import EventImage from './EventImage';

export class Print extends React.Component{
    handleEvent(){
        alert("Local Function");
    }
    render (){
        return(
            <div>
                <h1>Hello {this.props.greets}</h1>
                <button onClick={this.handleEvent}>Click Me</button>
                <MyButton />
                <EventImage />
            </div>
        );
    }
}
Print.defaultProps = {greets:'Dipanshu Shora'};