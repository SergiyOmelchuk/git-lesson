import React from 'react';
import s from "./Profile.module.css";
import Posts from './Posts/Posts';
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePorftfolio from './ProfilePorftfolio/ProfilePorftfolio';
import {connect} from "react-redux";
import {
    addPost,
    getStatus,
    getUserProfile,
    setPhoto,
    updateProfileData,
    updateNewPost,
    updateStatus
} from "../redux/Profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            if (!this.props.userIdOwner) {
                userId = 2;
            } else {
                userId = this.props.userIdOwner;
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
        // let userId = this.props.match.params.userId;
        // if (!userId) userId = 2;
        // usersAPI.setUserProfile(userId).then(response => {
        //     this.props.setUserProfile(response);
        // });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (<div className={s.profile}>
            <ProfileBackground/>
            <ProfileInfo profile={this.props.profile} status={this.props.status}
                         updateProfileData={this.props.updateProfileData}
                         updateStatus={this.props.updateStatus} setPhoto={this.props.setPhoto}
            />
            <Posts addPost={this.props.addPost}
                   updateNewPost={this.props.updateNewPost}
                   newPostText={this.props.newPostText}
                   posts={this.props.posts}
            />
            <ProfilePorftfolio/>
        </div>);
    }

}

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        auth: state.auth.isAuth,
        userIdOwner: state.auth.userId,
        status: state.profilePage.status,
    };
};

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
//
// export default connect(mapStateToProps, {addPost, updateNewPost, getUserProfile})(WithUrlDataContainerComponent);
export default compose(
    connect(mapStateToProps, {
        addPost,
        updateNewPost,
        getUserProfile,
        getStatus,
        updateStatus,
        setPhoto,
        updateProfileData
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)