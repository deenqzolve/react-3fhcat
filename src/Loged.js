import React from "react";
import "./style.css";

class Loged extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //loge: true
    };
  }
  render() {
    return (
      this.state.loge ?
      <h1>Hello</h1>:
      <h1>Please Log</h1>
      
      );
  }
}
export default Loged;
