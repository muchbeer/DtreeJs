const ViewAirtimeReducer = (state, action) => {
    switch (action.type) {
      case "VIEW_AIRTIME_START":
        return {
          viewAirtime: null,
          isFetching: true,
          error: false,
        };
      case "VIEW_AIRTIME_SUCCESS":
        return {
          viewAirtime: action.payload,
          isFetching: false,
          error: false,
        };
      case "VIEW_AIRTIME_FAILURE":
        return {
          viewAirtime: null,
          isFetching: false,
          error: true,
        };
        
    
      default:
        return state;
    }
  };
  
  export default ViewAirtimeReducer;