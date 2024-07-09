import React from 'react';
import "./Appointment.css";
import AppPart from '../Schedulepage/AppPart';


function Appointment() {
  return (
    <div className='main'>
        <div className="schedule_nav">
            <a href="/schedule/med-time">Medicine Timings</a>
                <div className="straight"></div>
            <a href="/schedule/appointment">Appointment Reminder</a>
        </div>
        <AppPart/>
        <AppPart/>
    </div>
  );
}
export default Appointment;

