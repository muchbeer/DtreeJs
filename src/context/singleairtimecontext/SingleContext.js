import { createContext, useEffect, useReducer } from "react";
import SingleReducer from "./SingleReducer"

//JSON.parse(localStorage.getItem("singleairtime")) ||
const INITIAL_STATE = {
    singleairtime:   null,
    isFetching: false,
    error: false,
  };

  export const SingleContext = createContext(INITIAL_STATE);

  export const SingleAirtimeContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(SingleReducer, INITIAL_STATE);

    
    useEffect(()=>{
        localStorage.setItem("singleairtime", JSON.stringify(state.singleairtime))
      }, 
      [state.singleairtime]);   

      return (
        <SingleContext.Provider
          value={{
            singleairtime: state.singleairtime,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
          }}
        >
          {children}
        </SingleContext.Provider>
      );
  };