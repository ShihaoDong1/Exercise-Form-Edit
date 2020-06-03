import React, { Component } from "react";

class UserInfo extends Component {
    render() {
        return (
            <div>
                <label>FirstName: {this.state.firstname}</label>
                <label>LastName: {this.state.lastname}</label> 
                <button>Edit</button>
            </div>
        );
      }
}


class Form extends Component {
    render() {
        return (
            <div>
                //This will include the form html
            </div>
        );
      }
}

export default UserInfo
export default Form