import React from 'react';

export const IntroList = (props) =>{
    return(
        <p>
            Name : {props.name}<br />
            Phone Number : {props.ph}<br />
            Voting Eligibility : {props.adult>=18?'Eligible':'Not Eligible'}
        </p>
    );
}