import React from "react";
import {combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import usersReducer from "./Users-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

const store = createStore(reducers);

window.store = store;


export default store;