import React from 'react'
import "./sendairtime.css"
import axios from 'axios'

export default function SendAirtime() {


  const handleCallback = async () => {

    try {
      const reqCallback = await axios.post('api/auth/airtimecallback');
      const reqJSON = JSON.stringify(reqCallback);
      console.log('The callback retrieved is : ' + reqJSON);
    } catch (error) {
      console.log('The error is callback is : ' +  error)
    }
  }
  handleCallback(); 


  return (
    <div className='sendairtime'>
         <h1 className="newUserTitle">Send Airtime</h1>
      <form className="newUserForm" >
        <div className="newUserItem">
          <label>Phone Number</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Amount</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton" >Send</button>
      </form>
    </div>
  )
}
