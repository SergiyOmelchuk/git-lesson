import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile" render = { () => <Profile /> } />
                <Route path="/dialogs" render={() => <Dialogs />}/>
                <Route path="/users" render={() => <UsersContainer />}/>
            </div>
        </div>
    );
}

export default App;