import React, {createContext, useReducer} from "react";
import Reducer from "./reducer";

const initialState = {
    active: false
 }

 const SimpleStore = ({ children }) => {
     const [state, dispatch] = useReducer(Reducer, initialState);
     return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
     )
 }

 export const Context = createContext(initialState);
 export default SimpleStore;