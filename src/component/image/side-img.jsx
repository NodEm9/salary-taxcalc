import React from 'react';
import taxpayImg from '../../images/tax-payment-1.jpg';
// import nodeBey from '../../images/NODBEYLOGO.jpg'

function ImageOne() {
    const img = taxpayImg;
    // const img = nodeBey;  

    return (<img className='img-one' src={img} alt='Header tax man'></img>)
 }
 
 export default ImageOne