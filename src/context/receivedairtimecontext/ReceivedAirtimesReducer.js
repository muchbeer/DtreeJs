const ReceivedAirtimeReducer = (state, action) => {
    switch (action.type) {
      
        case "RETRIEVE_AIRTIME_START":
          return {
            receivedAirtime: null,
            isFetching: true,
            error: false,
          };
        case "RETRIEVE_AIRTIME_SUCCESS":
          return {
            receivedAirtime: action.payload,
            isFetching: false,
            error: false,
          };
        case "RETRIEVE_AIRTIME_FAILURE":
          return {
            receivedAirtime: null,
            isFetching: false,
            error: true,
          };
    
      default:
        return state;
    }
  };
  
  export default ReceivedAirtimeReducer;