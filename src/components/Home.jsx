import React, { useEffect, useState, useContext } from 'react'
import Topbar from "./topbar/Topbar"
import Sidebar from './sidebar/Sidebar';
import axios from 'axios';
import Auth from './Auth';
import Airtime from './airtime/Airtime';
import "./app.css"
import Dashboard from '../pages/home/Dashboard';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import ViewAirtime from './airtime/ViewAirtime';
import SendAirtime from './sendairtime/SendAirtime';


function Home() {

  const [firstname , setFirstname ] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  axios.defaults.withCredentials = true;

  const handleLogout = () => {
  
    axios.get('http://localhost:5000/api/auth/logout').then(user => {
      console.log("Enter logout zone");
      window.location.reload(false);
      console.log("After reflesh")
      if(user.data.isLogout) {
        alert('You are now Logout successful')
        
      }
    }).catch (error => {
      console.log(`logout error is session : ${error}`)
    })
  };
  
 
  useEffect( () => {

    const fetchUsers = () => { 
      axios.get('http://localhost:5000/api/auth/protected').then(users => {
        console.log("using cors")
        if(users.data.user) {
          const userx = JSON.parse(users.data.user) ; 
          setFirstname(userx.first_name);
          setIsAuth(true);
        } else {
          setIsAuth(false);
          // navigate('/login');
        }
        
        }).catch( error => {
          console.log(`Session error is : ${error}`);
        })
    };

    fetchUsers();
    

  }, [])


  return (
    <div>
   
    <Router>

          <Topbar 
            clickLogout = { handleLogout } />
        <div className='container' >
          <Sidebar />
          
          <Routes>
          <Route path="/protected/*" element={ isAuth ? <Dashboard /> : <Auth /> } />
  
          <Route path="/login" element= {  <Auth /> }  />

          <Route path="/airtime"  element= { isAuth ? <Airtime /> :  <Auth /> } />

          <Route path= "viewairtime/:airtimeID" element = { isAuth ? <ViewAirtime/> : <Auth /> } />

          <Route path = "/sendairtime" element = { isAuth ? <SendAirtime /> : <Auth /> }  />
          </Routes>
        </div>
           
        </Router>
   
</div>
  )
}

export default Home;