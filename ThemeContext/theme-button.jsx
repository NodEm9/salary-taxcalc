import React from "react";
import { ThemeContext } from "./theme-context";



export class ThemedButton extends React.Component {
    render() {
      let props = this.props;
      let theme = this.context;
      return (
        <div>
        <button
          {...props}
          style={{backgroundColor: theme.background}}
        />
        </div>
      );
    }
  }

  ThemedButton.contextType = ThemeContext;
  
//   export default ThemedButton;