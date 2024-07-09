import Details from "./Details";
// import { useState } from "react";
import "./Schedules.css"
// import Clock from "./clock";

const Schedule = () => {
    // const [detailsCount, setDetailsCount] = useState(1); 
    // detailsCount=1;
    return (
        <div className="main">
            <div className="top">
                <div className="schedule_nav">
                    <a href="/schedule/med-time">Medicine Timings</a>
                    <div className="straight"></div>
                    <a href="/schedule/appointment">Appointment Reminder</a>
                </div>
            </div>
                <Details/>
                <br />
                <Details/>
                <br/>
                <Details/>
    </div>        
    );
}
        
export default Schedule;
