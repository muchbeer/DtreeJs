import { createContext, useEffect, useReducer } from "react";
import ViewAirtimeReducer from "./ViewAirtimeReducer";

const INITIAL_STATE = {
    viewAirtime: JSON.parse(localStorage.getItem("viewairtime")) || null,
    isFetching: false,
    error: false,
  };

  export const ViewAirtimeContext = createContext(INITIAL_STATE);

  export const ViewAirtimeContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ViewAirtimeReducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("viewairtime", JSON.stringify(state.viewAirtime))
      }, 
      [state.viewAirtime]);

      return (
        <ViewAirtimeContext.Provider
          value={{
            viewAirtime: state.viewAirtime,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
          }}
        >
          {children}
        </ViewAirtimeContext.Provider>
      );
  };