import React from 'react';
import {InputField} from './InputField.js';
import {AgeIncrement} from './EventHandler.js';
export class Intro extends React.Component{
    render(){
        return(
            <div>
                <InputField>
                    <h4>This is all about parent's state accessing by children's props</h4>
                </InputField>
                <AgeIncrement myage={20}/>
            </div>
        );
    }
}