import React from 'react';
// import taxpayImg from '../images/tax-payment-1.jpg';
import nodbey from '../../images/NODBEYLOGO.jpg';

function Image() {
   // const img = taxpayImg;
   const img = nodbey;  
   return(
        <img className='img' src={img} alt='Header tax man'></img>
   )
    
}

export default Image

