import React from 'react';
import ReactDOM from 'react-dom';
import {Print} from './print.js';
class ReactAppComponents extends React.Component{
    render(){
        return (
            <div>
                <Print greets="Deepanshu Shora" />
            </div>
        );
    }
}
ReactDOM.render(<ReactAppComponents />,document.getElementById('app'));