const AirtimeReducer = (state, action) => {
    switch (action.type) {
      case "SEND_AIRTIME_START":
        return {
          airtime: null,
          isFetching: true,
          error: false,
        };
      case "SEND_AIRTIME_SUCCESS":
        return {
          airtime: action.payload,
          isFetching: false,
          error: false,
        };
      case "SEND_AIRTIME_FAILURE":
        return {
          airtime: null,
          isFetching: false,
          error: true,
        };
    

      default:
        return state;
    }
  };
  
  export default AirtimeReducer;