import React from "react";
import TaxInput from "./tax-calc";
    
class Tax extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }
  
  render() {
       return(
       <TaxInput inputRef={this.inputElement} />
    )
  }
}  

export default Tax;