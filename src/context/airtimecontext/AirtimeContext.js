import { createContext, useEffect, useReducer } from "react";
import AirtimeReducer from "./AirtimeReducer";

const INITIAL_STATE = {
    airtime: JSON.parse(localStorage.getItem("airtime")) || null,
    isFetching: false,
    error: false,
  };

  export const AirtimeContext = createContext(INITIAL_STATE);

  export const AirtimeContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AirtimeReducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("airtime", JSON.stringify(state.airtime))
      }, 
      [state.airtime]);

      return (
        <AirtimeContext.Provider
          value={{
            airtime: state.airtime,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
          }}
        >
          {children}
        </AirtimeContext.Provider>
      );
  };