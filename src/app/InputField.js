import React from 'react';
import {IntroList} from './IntroList.js';
export class InputField extends React.Component{
    constructor(props){
        super(props);
        this.state = {user_name:'Enter Your Name',user_ph:'Enter Your Phone Number',user_adult:0};
    }
    render(){
        return(
            <div>
                <input type="text" onChange={(e)=>this.setState({user_name:e.target.value})} placeholder={this.state.user_name} /><br/>
                <input type="text" onChange={(e)=>this.setState({user_ph:e.target.value})} placeholder={this.state.user_ph} /><br/>
                <input type="text" onChange={(e)=>this.setState({user_adult:e.target.value})} placeholder={this.state.user_adult} />
                <IntroList name={this.state.user_name} ph={this.state.user_ph} adult={this.state.user_adult}/>
            </div>
        );
    }
}