const SingleReducer = (state, action) => {
    switch (action.type) {
      
      
        case "SEND_SINGLE_AIRTIME_START":
          return {
            singleairtime: null,
            isFetching: true,
            error: false,
          };
        case "SEND_SINGLE_AIRTIME_SUCCESS":
          return {
            singleairtime: action.payload,
            isFetching: false,
            error: false,
          };
        case "SEND_SINGLE_AIRTIME_FAILURE":
          return {
            singleairtime: null,
            isFetching: false,
            error: true,
          };

      default:
        return state;
    }
  };
  
  export default SingleReducer;