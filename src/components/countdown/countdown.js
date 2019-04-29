import React from 'react'
import styles from './countdown.module.css'
import FundClockProgress from "react-fundraising-countdown"

const CountDown = () => (
  <div className={styles.countdown}>
    <span className={styles.date}>1 Feb 2020. 4:00PM</span>
    <div className={styles.center}>
      <FundClockProgress
        campaignEndDate="2000-02-01 16:00:00"
        icoClockStyle={{ backgroundColor: "#EDDEAD" }}
        icoClockFlipStyle={{ backgroundColor: "#EDDEAD" }}
        icoClockFlipTextStyle={{ color: "#000" }}
        unitLabelContainerStyle={{ backgroundColor: "#EDDEAD" }}
        unitLabelTextStyle={{ color: "#000" }}
      />
    </div>
  </div>
)

export default CountDown