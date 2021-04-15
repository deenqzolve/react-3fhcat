import React from "react";
import axios from "axios";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      body: ""
    };
  }

  txtchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  additem = () => {
    //alert("Hai");
    var data={
      userId: this.state.id,
      title: this.state.title,
      body:  this.state.body
    }
    //console.log(data);
    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then((response) => {
        console.log(response);
      })
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <input
          type="text"
          name="id"
          onChange={this.txtchange}
          value={this.state.id}
        />
        <br />
        <input
          type="text"
          name="title"
          onChange={this.txtchange}
          value={this.state.title}
        />
        <br/>
        <textarea name="body" onChange={this.txtchange}>
          {this.state.body}
        </textarea>
        <br />
        <button onClick={this.additem}>Add</button>
      </div>
    );
  }
}

export default Post;
