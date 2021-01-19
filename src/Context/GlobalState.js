import React, { createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

// initial state
const initialstate = {
    users: [ ]
   
};

// create context 
export const GlobalContext = createContext(initialstate);

// provider component 

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialstate);

    //actions

    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }


      const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }


    return (
        <GlobalContext.Provider value={{
            users: state.users ,
            removeUser: removeUser,
            addUser: addUser
        }}>
            {children}

        </GlobalContext.Provider>
    )
}
