import React, { Component } from "react";

class UserInfo  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            didClickEdit:false
        }
    }

    changeInfo = () => {
        this.setState({
            didClickEdit: true
        })
    }

    saveChange = () => {

    }

    cancelChange = () => {


    }

    handleNameChange = () => {
        
    }

    render() {
        if(this.state.didClickEdit) {
            return (
                <form>
                    <input type="text" firstName={this.state.firstName} onChange={this.handleNameChange}/>
                    <input type="text" lastName={this.state.lastName} onChange={this.handleNameChange}/>
                    <button onClick={this.saveChange}>Save</button>
                    <button onClick={this.cancelChange}>Cancel</button>
                </form>
            );
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