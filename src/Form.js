import React, { Component } from "react";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      didClickEdit: false
    };
    
    this.blank = this.state;
  }
  
  changeInfo  = () => {
    this.setState({ 
      didClickEdit: true
    });
  };

  saveChange = () => {
  this.setState({ 
      didClickEdit: false
    });
  }

  cancelChange = () => {
  this.setState({ 
      didClickEdit: false,
      ...this.blank
    });
  }

  handleNameChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
  if (this.state.didClickEdit) {
    return (
      <form>
        <input type="text" name="firstName" onChange={this.handleNameChange}/>
        <input type="text" name="lastName" onChange={this.handleNameChange}/>
        <button onClick={this.saveChange}>Save</button>
        <button onClick={this.cancelChange}>Cancel</button>
      </form>
    );
  }
  else {
    return (
      <div >
        <p>
        <label>First Name: {this.state.firstName} </label>
        </p>
        <p>
        <label>Last Name: {this.state.lastName}</label>
        </p>
        <button onClick={this.changeInfo}>Edit</button>
      </div>
      );
    }
  }
}

export default UserInfo;
