import React from "react";
import taxpayImg from "../../images/tax-payment-1.jpg";

function ImageOne() {
  const img = taxpayImg;
  return <img className="img-one" src={img} alt="Header tax man"></img>;
}

export default ImageOne;
