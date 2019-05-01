import React from 'react'
import styles from './countdown.module.css'
import FundClockProgress from "react-fundraising-countdown"
import AddToCalendar from 'react-add-to-calendar';

const CountDown = () => {
  const event = {
    title: 'Boda Victor y Vale',
    description: '',
    location: 'Iglesia de Alajuelita',
    startTime: '2020-02-01T17:00:00-06:00',
    endTime: '2020-02-02T00:00:00-06:00'
  }
  let icon = { 'calendar-plus-o': 'left' };
  return (
    <div className={styles.countdown}>
      <span className={styles.date}>1 Feb 2020. 5:00PM</span>
      <div>
        <AddToCalendar buttonLabel="Agregar a mi calendario" buttonTemplate={icon} event={event}/>
      </div>
      <div className={styles.center}>
        <FundClockProgress
          campaignEndDate="2020-02-01 17:00:00"
          icoClockStyle={{ backgroundColor: "#EDDEAD" }}
          icoClockFlipStyle={{ backgroundColor: "#EDDEAD" }}
          icoClockFlipTextStyle={{ color: "#000" }}
          unitLabelContainerStyle={{ backgroundColor: "#EDDEAD" }}
          unitLabelTextStyle={{ color: "#000" }}
        />
      </div>
    </div>
  )
}

export default CountDown