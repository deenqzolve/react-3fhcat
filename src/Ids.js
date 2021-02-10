import React from "react";
import "./style.css";
//import {  useParams } from "react-router-dom";


class Ids extends React.Component {
    constructor(props) {
    super(props);  
    }



  render() {
    console.log(this.props);
    return <h1>Hello, {this.props.match.params.id}</h1>;
  }
}


/*const Ids = (props) => {
  console.log(props);
   return <h1>Id _  {props.match.params.id}</h1>;
}*/
 
/*function Ids() {
  let {id}=useParams();
  return <h1>Id _  {id}</h1>;
}*/
export default Ids;
