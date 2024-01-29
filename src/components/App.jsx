import React, { useState } from "react";
import Auth from "./Auth";
import Home from "./Home";
import Airtime from "./Airtime";
import Topbar from "./topbar/Topbar";
import {
    Route,
    BrowserRouter as Router,
    Routes
  } from "react-router-dom";

function App() {
    
    return (
        <Router>
            <Routes>
            <Route path="/"  element={< Topbar/>}  />

            <Route path="/protected/*" element={<Home />} />
	            
            <Route path="/login" element= {  <Auth /> }  />

            <Route path="/airtime"  element= {  <Airtime /> } />

            <Route path="/post/:postId" element= { <Airtime /> } />

            </Routes>
        </Router>
    );
}

export default App;