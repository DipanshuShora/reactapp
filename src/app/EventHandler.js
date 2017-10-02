import React from 'react';
export class AgeIncrement extends React.Component{
    constructor(props){
        super(props);
        this.state = {myage:props.myage,status:0};
        setTimeout(()=>{
            this.setState({status:1});
        },5000);
        // setInterval(()=>{
        //     this.setState({myage:this.state.myage+1});
        // },1000);
        this.increment();
    }
    increment(){
        setInterval(()=>{
            if(this.state.myage===250){
                clearInterval(this.increment());
            }
            else{
                this.setState({myage:this.state.myage+1});
            }
        },1);
    }
    render(){
        return(
            <div>
                <h1>Update Age : {this.state.myage}</h1>
                <h2>Status : {this.state.status}</h2>
                <button onClick={()=>{this.setState({myage:this.state.myage+1})}}>Increment It</button>
                <button onClick={()=>{this.setState({myage:this.state.myage-1})}}>Decrement It</button>
            </div>
        );
    }
}
AgeIncrement.defaultProps = {myage:19};