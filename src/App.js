import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, HashRouter, Route, withRouter} from 'react-router-dom';

// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import LoginPage from "./components/LoginPage/LoginPage";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./components/redux/App-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./components/redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();

        // authAPI.authMe().then(response => {
        //     if (response.resultCode === 0) {
        //         let {id, email, login} = response.data;
        //         this.props.setAuthUserData(id, email, login)
        //     }
        //     ;
        // });
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <React.Suspense fallback={<Preloader/>}>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    </React.Suspense>
                    <Route path="/users" render={withSuspense(UsersContainer)}/>
                    <Route path="/login" render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = compose(withRouter,
    connect(mapStateToProps, {initializeApp}))
(App)

const SamuraiJSApp = () => {
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;