import React, { Component } from "react";

class UserInfo  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            didClickEdit:false
        }
    }


    changeInfo = () => {
        
    }

    render() {
        if(this.state.didClickEdit) {

        }
        else {
            return(
                <div >
                    <p>
                        <label>FirstName: </label>
                    </p>
                    <p>
                        <label>LastName: </label>
                    </p>
                    <button onClick={this.changeInfo}>Edit</button>
                </div>
            );
        }


      
    }
}

  export default UserInfo