import React, {createContext, useReducer} from "react";
import ModelReducer from "./reducer";

const init = {
    login: 'gao0',
    validationStep: 1
}

 const ComplexStore = ({ children }) => {
     const [state, dispatch] = useReducer(ModelReducer, init);
     return (
        <ComplexContext.Provider value={[state, dispatch]}>
            {children}
        </ComplexContext.Provider>
     )
 }

 export const ComplexContext = createContext(init);
 export default ComplexStore;