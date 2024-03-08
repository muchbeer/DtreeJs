import React from 'react'
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle' > Dashboard</h3>
                <ul className='sidebarList'>
                <Link to="/protected" className='link'>
                    <li className='sidebarListItem active'>
                        <LineStyleIcon  sx={{  color: '#747264' }}  />
                        <span className='sideText'>Home</span>
                    </li></Link>
                    <li className='sidebarListItem'>
                        <TimelineIcon  sx={{  color: '#747264' }}  />
                        <span className='sideText'>Analytic</span>
                    </li>
                    <Link to="/airtime" className='link'>
                    <li className='sidebarListItem'>
                        <ListAltOutlinedIcon 
                             sx= {{  color: '#747264' }} />
                        <span className='sideText'>Airtimes</span>
                    </li>
                    </Link>
                    
                </ul>
            </div>

            <div className='sidebarMenu'>
                <h3 className='sidebarTitle' > Quick Menu</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <LineStyleIcon 
                        sx={{  color: '#747264' }} />
                        
                        <span className='sideText'>Users</span>
                    </li>
                    <Link to="/mainairtime" className='link'>
                    <li className='sidebarListItem'>
                        <TimelineIcon 
                         sx={{  color: '#747264' }}  />
                        <span className='sideText'>View airtime</span>
                    </li> </Link>
                    <Link to="/onairtime" className='link'>
                    <li className='sidebarListItem'>
                        <ListAltOutlinedIcon 
                             sx={{  color: '#747264' }} />
                        <span className='sideText'>Send Airtime</span>
                    </li></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar