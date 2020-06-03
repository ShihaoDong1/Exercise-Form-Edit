import React, { Component } from "react";

class UserInfo  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            didClickEdit:false
        }
    }


    changeInfo() {
        
    }

    render() {
      return(
      <div >
          <p>
              <label>FirstName: </label>
          </p>
          <p>
              <label>LastName: </label>
          </p>
          <button onClick={changeInfo}>Edit</button>
       </div>
      );
    }
}

  export default Form