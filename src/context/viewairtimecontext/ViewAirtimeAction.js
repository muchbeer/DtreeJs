export const ViewAirtimeStart = () => ({
    type: "VIEW_AIRTIME_START",
  });
  
  export const ViewAirtimeSuccess = (viewAirtime) => ({
    type: "VIEW_AIRTIME_SUCCESS",
    payload: viewAirtime,
  });
  
  export const ViewAirtimeFailure = (error) => ({
    type: "VIEW_AIRTIME_FAILURE",
    payload:error
  });

