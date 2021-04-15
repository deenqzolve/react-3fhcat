import React from "react";
import "./style.css";
import Loged from "./Loged";
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      items: [],
      
    };
  }
  txtchange=e=>{
      this.setState({[e.target.name]: e.target.value});
  }
   additem=()=>{
      //alert("Hai");
      let nName= this.state.name;
      let nList= this.state.items;
      nList.push(nName);
      this.setState({itrms: nList});
       this.setState({name: ""});
  }

  removeitem=i=>{
      //alert(i)
      if(!window.confirm("Are You Sur to Delete this?"))
      {
          return;
      }
      let Rlist= this.state.items;
      Rlist.splice(i,1);
      this.setState({itrms: Rlist});
  }

  render() {

    return (
      <div>
     <Loged/>
        <input type="text" name="name" onChange={this.txtchange} value={this.state.name}/>
        <button onClick={this.additem}>Add</button>
        <ul className="list-group">
          {this.state.items.map((it,k)=>
          {
            return(
              <li className="list-group-item"> {it} <button className="pull-right" onClick={()=>{this.removeitem(k)}}>Delete </button></li>
              )
          } 
         )}
        </ul>
       
        
      </div>
      );
  }
}

export default Test;
