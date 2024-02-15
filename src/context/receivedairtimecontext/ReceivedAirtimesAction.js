export const AirtimeRetrieveStart = () => ({ 
    type: "RETRIEVE_AIRTIME_START"
   });

   export const AirtimeRetrieveSuccess = (airtimes) => ({ 
      type: "RETRIEVE_AIRTIME_SUCCESS",
      payload: airtimes
    });

    export const AirtimeRetrieveFailure = (error) => ({ 
        type: "RETRIEVE_AIRTIME_FAILURE", 
        payload: error
     })