import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile store={props.store} dispatch={props.dispatch}/>}/>
                <Route path="/dialogs" render={() => <Dialogs store={props.store.state.dialogsPage} dispatch={props.dispatch} />}/>
            </div>
        </div>
    );
}

export default App;