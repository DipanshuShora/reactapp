import React from 'react';
import ReactDOM from 'react-dom';
import {Print} from './print.js';
import {Heading} from './Heading.js';
import {Intro} from './Intro.js';
class ReactAppComponents extends React.Component{
    render(){
        return (
            <div>
                <Print />
                <Heading />
                <Intro />
            </div>
        );
    }
}
ReactDOM.render(<ReactAppComponents />,document.getElementById('app'));