import React, {createContext, useReducer} from "react";
import SearchReducer from "./reducer";

const initialState = {
    term: '',
    results: []
 }

 const SearchStore = ({ children }) => {
     const [state, dispatch] = useReducer(SearchReducer, initialState);
     return (
        <SearchContext.Provider value={[state, dispatch]}>
            {children}
        </SearchContext.Provider>
     )
 }

 export const SearchContext = createContext(initialState);
 export default SearchStore;