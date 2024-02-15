import React, { useEffect, useState, useContext } from 'react'
import Topbar from "./topbar/Topbar"
import Sidebar from './sidebar/Sidebar';
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
import UploadAirtime from './upload/UploadAirtime';
import AirtimeMain from './airtime/AirtimeMain';
import { AuthContext } from '../context/authcontext/AuthContext';
import { Upload } from '@mui/icons-material';
import AirtimeReceived from './airtime/AirtimeReceived';
import Test from './airtime/Test';



function Home() {


  const { user } = useContext(AuthContext);
  console.log(`the user is now : ${user}`)

  return (
    <div>
   
    <Router>

          <Topbar />
        <div className='container' >
          <Sidebar />
          
          <Routes>
          <Route path="/protected/*" element={ user ? <Dashboard /> : <Auth /> } />
  
          <Route path="/login" element= { user ? <Dashboard /> :   <Auth /> }  />

          <Route path="/airtime"  element= { user ? <Airtime /> :  <Auth /> } />

          <Route path= "viewairtime/:airtimeID" element = { user ? <ViewAirtime/> : <Auth /> } />

          <Route path = "/sendairtime" element = { user ? <SendAirtime /> : <Auth /> }  />

          <Route path='/uploadairtime'  element = {  user ? <UploadAirtime /> : <Auth />  } />

          <Route path="/mainairtime" element= { user ? < AirtimeMain /> : <Auth />}  />

          <Route path='/viewairtimereceived' element = { user ? < AirtimeReceived /> : <Auth /> } />
          </Routes>
        </div>
           
        </Router>
   
</div>
  )
}

export default Home;