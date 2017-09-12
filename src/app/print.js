import React from 'react';
import './css/print.css';
export class Print extends React.Component{
    render (){
        return(
            <div>
                <h1>Hello {this.props.greets}</h1>
                <button>Click Me</button>
            </div>
        );
    }
}
Print.defaultProps = {greets:'Dipanshu Shora'};