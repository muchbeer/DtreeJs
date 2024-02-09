export const AirtimeStart = (airtime) => ({
    type: "AIRTIME_START",
  });
  
  export const AirtimeSuccess = (airtime) => ({
    type: "AIRTIME_SUCCESS",
    payload: airtime,
  });
  
  export const AirtimeFailure = (error) => ({
    type: "AIRTIME_FAILURE",
    payload:error
  });