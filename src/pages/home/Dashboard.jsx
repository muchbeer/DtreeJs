import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { userData } from "../../dummyData";
import "./dashboard.css";


function Dashboard() {
  return (
    <div className= "dashboard" >
        <FeaturedInfo />
        <Chart data= {userData} 
          title="User Analytics"
          grid 
          dataKey="Active User"
        />
    </div>
  )
}

export default Dashboard