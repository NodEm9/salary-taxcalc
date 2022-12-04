import React from "react";
import TaxInput from "./tax-calc";
import { ThemeContext } from "../../ThemeContext/theme-context";
    
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