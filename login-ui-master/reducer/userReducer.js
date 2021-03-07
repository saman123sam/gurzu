import React from "react";

const initialState = {
  isLogged: false,
  token: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "loggedSuccess":
      return {
        ...state,
        isLogged: true,
        token: action.token,
      };
    default:
      return state;
  }
};

const UserDispatch = React.createContext(null);

export { initialState, userReducer, UserDispatch };

