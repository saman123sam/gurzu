import React from 'react';

const initialState = {
    isLogged: false
}

const userReducer = (state, action) => {
    switch (action.type) {
        case "loggedSuccess":
            return {
                ...state,
                isLogged: true
            }
        default:
            return state;
    }
}

const UserDispatch = React.createContext(null)

export {initialState, userReducer, UserDispatch}