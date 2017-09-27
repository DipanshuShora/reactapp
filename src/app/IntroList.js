import React from 'react';
import PropTypes from 'prop-types';
export const IntroList = (props) =>{
    return(
        <p>
            Name : {props.list.name}<br />
            Phone Number : {props.list.ph}<br />
            Voting Eligibility : {props.list.adult>=18?'Eligible':'Not Eligible'}
        </p>
    );
};
IntroList.propTypes = {
    name:PropTypes.string,
    ph:PropTypes.number,
    adult:PropTypes.number
};