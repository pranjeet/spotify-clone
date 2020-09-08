import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //Prepares the Datalayer

export const StateProvider = ({  initialState, reducer, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
