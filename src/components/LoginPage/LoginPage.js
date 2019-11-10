import React from "react";
import {reduxForm} from "redux-form";
import s from './Login.module.css';
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../redux/Auth-reducer";
import {Redirect} from "react-router-dom";

// const LoginForm = (props) => { далее деструктуризация:
const LoginForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, null, {type: "password"})}
            {createField(null, "rememberMe", [], Input, "remember me", {type: "checkbox"})}
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const LoginPage = ({login, isAuth}) => {
    let onSubmit = (data) => {
        login(data.email, data.password, data.rememberMe)
    }
    if (isAuth) {
        return (
            <Redirect to={"/profile"}/>
        )
    }
    return (
        <div className={s.loginPage}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};

export default connect(mapStateToProps, {login})(LoginPage);