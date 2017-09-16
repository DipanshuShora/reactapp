import React from 'react';
import ReactDOM from 'react-dom';
import {Print} from './print.js';
import {Heading} from './Heading.js';
class ReactAppComponents extends React.Component{
    render(){
        return (
            <div>
                <Print />
                <Heading />
            </div>
        );
    }
}
ReactDOM.render(<ReactAppComponents />,document.getElementById('app'));