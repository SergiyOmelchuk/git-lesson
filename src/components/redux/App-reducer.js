
import {getAuthUserData} from "./Auth-reducer";

let initialState = {
    initialized: false
};

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};

export let initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then( () => {
        dispatch(initializedSuccess())
    } )
}


export default appReducer;