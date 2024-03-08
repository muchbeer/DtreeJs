import axios from "axios";
import {  AirtimeSingleStart, AirtimeSingleSuccess, AirtimeSingleFailure } from "./SingleActions";

export const sendSingleAirtimeApi = async(airtime, dispatch) => {
    dispatch(AirtimeSingleStart());
   
    try {
        
      const res = await axios.post('api/auth/sendvoucher', airtime);

      if (res.data == null) {
        console.log("No airtime sent")
        alert("No airtime sent please try again");
        
          } 

  
      dispatch(AirtimeSingleSuccess(res.data));
    } catch (error) {
      dispatch( AirtimeSingleFailure(error) );
    }
  }