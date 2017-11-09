import React from 'react';
export class AgeIncrement extends React.Component{
    mymessage(){
        //child class method
        alert("mymessage");
    }
    constructor(props){
        super(props);
        this.state = {myage:props.myage,status:0};
        this.increment = this.increment.bind(this);
    }
    increment(){
        setInterval(()=>{
            if(this.state.myage===40){
                clearInterval(this.increment());
            }
            else{
                this.setState({myage:this.state.myage+1});
            }
        },1000);
        setTimeout(()=>{
            this.setState({status:1});
        },5000);
    }
    render(){
        return(
            <div>
                <h1>Update Age : {this.state.myage}</h1>
                <h2>Status : {this.state.status}</h2>
                <button onClick={()=>{this.setState({myage:this.state.myage+1})}}>Increment It</button>
                <button onClick={()=>{this.setState({myage:this.state.myage-1})}}>Decrement It</button>
                <button onClick={this.increment}>Start Age Counter</button>
                <button className="btn" onClick={this.props.greet}>Message</button>
            </div>
        );
    }
}
AgeIncrement.defaultProps = {myage:19};