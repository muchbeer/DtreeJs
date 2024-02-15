import axios from "axios";
import { ViewAirtimeStart, ViewAirtimeSuccess, ViewAirtimeFailure } from "./ViewAirtimeAction";


  //sending airtime
  export const viewAirtimeApi = async( dispatch ) => {
   // dispatch({ type: "VIEW_AIRTIME_START" });
    dispatch(ViewAirtimeStart());
   
    try {
        
      const res = await axios.get('api/auth/viewmainairtime');

      if (res.data == null) {
        console.log("No airtime found")
        alert("No airtime sent please try again");
        
          } 

          dispatch(ViewAirtimeSuccess(res.data));
     // dispatch({ type: "VIEW_AIRTIME_SUCCESS", payload: res.data });
    } catch (error) {
     // dispatch({ type: "VIEW_AIRTIME_FAILURE", payload: error });
     dispatch(ViewAirtimeFailure(error))
    }
  }

