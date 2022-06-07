import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      todoList: "",
    };
    // handleChange = (event) => {
    //   this.setState({
    //     ...this.state,
    //     input: event.target.value,
    //   });
    // };

    // handleSubmit = event => {
    //   event.preventDefault()

    // }
  }
  render() {
    return <div>Form
      {/* <form onSubmit = {this.handleSubmit}>
        <input
          type ="text"
          name ="Type todo"
          value = {this.state.todoList}
          onChange = {this.handleChange}
        /> */}
        <button>Submit</button>
      {/* </form> */}
    </div>;
  }
}
