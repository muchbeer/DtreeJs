import { createContext, useEffect, useReducer } from "react";
import ReceivedAirtimeReducer from "./ReceivedAirtimesReducer";

const INITIAL_STATE = {
    receivedAirtime: JSON.parse(localStorage.getItem("receivedairtime")) || null,
    isFetching: false,
    error: false,
  };

  export const ReceivedAirtimeContext = createContext(INITIAL_STATE);

  export const ReceivedAirtimeContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ReceivedAirtimeReducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("receivedairtime", JSON.stringify(state.receivedAirtime))
      }, 
      [state.receivedAirtime]);

      return (
        <ReceivedAirtimeContext.Provider
          value={{
            receivedAirtime: state.receivedAirtime,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
          }}
        >
          {children}
        </ReceivedAirtimeContext.Provider>
      );
  };