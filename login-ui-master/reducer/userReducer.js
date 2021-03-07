import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  isLogged: false,
  token: null,
};

const initializer = async (initialValue = initialState) => {
  try {
    const value = await AsyncStorage.getItem("user");
    const parsedValue = JSON.parse(value);

    if (parsedValue !== null) {
      return parsedValue;
    }

    return initialState;
  } catch (e) {
    return initialState;
  }
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

export { initialState, userReducer, UserDispatch, initializer };

