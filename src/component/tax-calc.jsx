import React from "react";
import TaxData from "../store/store";
import ImageOne from "./image/side-img";

function TaxInput() {
  return (
    <div className="form">
      <div className="side-img">
        <ImageOne />
      </div>
      <div>
        <TaxData />
      </div>
    </div>
  );
}

export default TaxInput;
