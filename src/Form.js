import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      isClickEdit: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
  }
  
  handleEdit = () => {
    this.setState({ 
      isClickEdit: true 
    });
  };

  handleNameChange(event) {
    this.setState({
      firstName: event.target.value,
      lastName: event.target.value
    });
  }
  
  render() {
    const edit = this.state.isClickEdit === false ? 
    (
      <>
      <label>FirstName: {this.state.firstName}</label>
      <br></br>
      <label>LastName: {this.state.lastName}</label>
      <br></br>
      <button onClick={this.handleEdit}>Edit</button>
      </>
    ) : 
    ( 
      <div>
      <p>First name:</p>
      <input
        type="text"
        firstName={this.state.firstName}
        onChange={this.handleNameChange}
      />
      <p>Last name:</p>
      <input
        type="text"
        lastName={this.state.lastName}
        onChange={this.handleNameChange}
      />
      </div>
    )
    return (
      <div>{edit}</div>
    );
  }
}

export default Form;
