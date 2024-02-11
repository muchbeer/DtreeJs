export const AirtimeStart = (airtime) => ({
    type: "SEND_AIRTIME_START",
  });
  
  export const AirtimeSuccess = (airtime) => ({
    type: "SEND_AIRTIME_SUCCESS",
    payload: airtime,
  });
  
  export const AirtimeFailure = (error) => ({
    type: "SEND_AIRTIME_FAILURE",
    payload:error
  });