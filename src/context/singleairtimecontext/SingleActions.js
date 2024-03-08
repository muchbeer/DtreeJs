export const AirtimeSingleStart = () => ({
    type: "SEND_SINGLE_AIRTIME_START",
  });
  
  export const AirtimeSingleSuccess = (singleairtime) => ({
    type: "SEND_SINGLE_AIRTIME_SUCCESS",
    payload: singleairtime,
  });
  
  export const AirtimeSingleFailure = (error) => ({
    type: "SEND_SINGLE_AIRTIME_FAILURE",
    payload:error
  });