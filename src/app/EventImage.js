import React from 'react';
const simeon = {
    imgsrc:"http://24.media.tumblr.com/4044b84f0a59433f1d3746427d1f5811/tumblr_n3olv5AR3V1rs4ej4o1_500.jpg",
    imgalt:"simeon panda"
};

// export class EventImage extends React.Component{
//     render(){
//         return(
//             <img src={simeon.imgsrc} alt={simeon.imgalt}/>
//         );
//     }
// }
export const EventImage = () =>{
  return(
      <img src={simeon.imgsrc} alt={simeon.imgalt}/>
  );
};