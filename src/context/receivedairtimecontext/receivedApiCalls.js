import { AirtimeRetrieveStart, AirtimeRetrieveSuccess, AirtimeRetrieveFailure } from "./ReceivedAirtimesAction";
import axios from "axios";

export const airtimesReceivedApi = async(id, dispatch) => {
    dispatch(AirtimeRetrieveStart());
   
    try {
        
      const res = await axios.post('api/auth/receivedairtime', id);

      if (res.data == null) {
        console.log("No airtime retrieved")
        alert("No airtime found please try again");
          } 

  
      dispatch(AirtimeRetrieveSuccess(res.data));
    } catch (error) {
      dispatch(AirtimeRetrieveFailure(error));
    }
  }