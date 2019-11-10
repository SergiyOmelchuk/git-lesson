import React from 'react';


class AboutMeChange extends React.Component {
    state = {
        aboutMe: this.props.aboutMe,
    }
    onAboutmeChange = (e) => {
        this.setState({
            aboutMe: e.currentTarget.value
        })
    }
    deActivateEditMode = () => {
        this.props.updateAboutMe(this.state.aboutMe);
    }
    render = () => {
        return (
            <div>
                <input type={"text"} autoFocus={true} onChange={this.onAboutmeChange} onBlur={this.deActivateEditMode}/>
            </div>
        )
    }
}

export default AboutMeChange;