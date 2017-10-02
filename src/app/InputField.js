import React from 'react';
import {IntroList} from './IntroList.js';

export class InputField extends React.Component{
    constructor(props){
        super(props);
        this.state = {user_name:'',user_ph:'',user_adult:null};
    }
    render(){
        var list = {
            name:this.state.user_name,
            ph:this.state.user_ph,
            adult:this.state.user_adult
        };
        return(
            <div>
                <input type="text" onChange={(e)=>this.setState({user_name:e.target.value})} placeholder="Enter Your Name" /><br/>
                <input type="text" onChange={(e)=>this.setState({user_ph:e.target.value})} placeholder="Enter Your Phone No." /><br/>
                <input type="text" onChange={(e)=>this.setState({user_adult:e.target.value})} placeholder="Enter Your Age" />
                <IntroList list={list} />
                {this.props.children}
            </div>
        );
    }
}