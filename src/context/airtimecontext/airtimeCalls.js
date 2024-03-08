import axios from "axios";
import { AirtimeStart, AirtimeSuccess, AirtimeFailure } from "./AirtimeActions";

  //sending airtime
  export const sendAirtimeApi = async(airtime, dispatch) => {
    dispatch(AirtimeStart());
   
    try {
        
      const res = await axios.post('api/auth/sendairtime', airtime);

      if (res.data == null) {
        console.log("No airtime sent")
        alert("No airtime sent please try again");
        
          } 

  
      dispatch(AirtimeSuccess(res.data));
    } catch (error) {
      dispatch(AirtimeFailure(error));
    }
  }


