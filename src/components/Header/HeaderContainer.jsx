import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../redux/Auth-reducer";

class HeaderContainer extends React.Component {
    // componentDidMount() {
    //     this.props.getAuthUserData();
    //     // authAPI.authMe().then(response => {
    //     //     if (response.resultCode === 0) {
    //     //         let {id, email, login} = response.data;
    //     //         this.props.setAuthUserData(id, email, login)
    //     //     }
    //     //     ;
    //     // });
    // }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        userId: state.auth.userId

    };
};

export default connect(mapStateToProps, {logout})(HeaderContainer);