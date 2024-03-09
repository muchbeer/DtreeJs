import React from 'react'
import "./featuredinfo.css";


import { ArrowDownward, ArrowUpward } from '@mui/icons-material';



function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Balance</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">TZS2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Last topup</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">TZS4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total spent</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">TZS2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo