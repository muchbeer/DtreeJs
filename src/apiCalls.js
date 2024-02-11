import axios from "axios";


//login 
export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post('api/auth/login', userCredential);
 
      if (res.data == null) {
        console.log("No username found")
        alert("No username found please try again");
        
    } 
    console.log(`The data captured is : ${res.data.email}`)

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
  };

