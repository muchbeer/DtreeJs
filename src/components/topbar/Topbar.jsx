import React from 'react'
import "./topbar.css"
import {   PowerSettingsNewRounded } from '@mui/icons-material';


function Topbar() {

 const clickedLogout = () => {
      alert("will deal with this later")
 }

  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
        <div className='topLeft'>
        <span className='logo'>Airtime Account</span></div>
        <div className='topRight'>
          <div className="topbarIconContainer">
            <PowerSettingsNewRounded 
            fontSize='large' 
            onClick={ clickedLogout }
             />
          </div>
            <img src='https://d1suqciy1b15i1.cloudfront.net/htm_live/logos/DtreeInternat-20221013-094320' alt='Dtree logo' className='topAvatar' />
        </div>
        </div>
    
    </div>
  )
}

export default Topbar