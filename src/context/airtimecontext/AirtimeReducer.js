const AirtimeReducer = (state, action) => {
    switch (action.type) {
      case "AIRTIME_START":
        return {
          airtime: null,
          isFetching: true,
          error: false,
        };
      case "AIRTIME_SUCCESS":
        return {
          airtime: action.payload,
          isFetching: false,
          error: false,
        };
      case "AIRTIME_FAILURE":
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