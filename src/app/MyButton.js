import React from 'react';
function handleClick(){
    alert("Example of Global Function");
}
export const MyButton = () => {
    return(
        <button onClick={handleClick}>Click Me Plz</button>
    );
}