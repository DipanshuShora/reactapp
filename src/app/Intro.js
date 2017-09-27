import React from 'react';
import {InputField} from './InputField.js';
export class Intro extends React.Component{
    render(){
        return(
            <InputField>
                <h4>This is all about parent's state accessing by children's props</h4>
            </InputField>
        );
    }
}