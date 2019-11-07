import React from "react";

let newPostElement = React.createRef();

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
        i: 0
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status != this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render = () => {

        console.log("render" + this.state.i);
        this.state.i++;
        return (
            <div>
                {!this.state.editMode &&
                <div>
                        <span onDoubleClick={() => {
                            this.activateEditMode();
                            this.activateEditMode();
                            this.activateEditMode();
                        }}>
                           {this.state.status || "No status"}
                         </span>
                </div>
                }

                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;