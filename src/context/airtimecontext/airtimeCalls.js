import axios from "axios";
  //sending airtime
  export const sendAirtimeApi = async(airtime, dispatch) => {
    dispatch({ type: "SEND_AIRTIME_START" });
   
    try {
        
      const res = await axios.post('api/auth/sendairtime', airtime);

      if (res.data == null) {
        console.log("No airtime sent")
        alert("No airtime sent please try again");
        
          } 

  
      dispatch({ type: "SEND_AIRTIME_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "SEND_AIRTIME_FAILURE", payload: error });
    }
  }