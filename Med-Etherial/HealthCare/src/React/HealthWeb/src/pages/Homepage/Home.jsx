// import { useState } from "react";
import "./Home.css";
// import SignInForm from "./SignInForm";
const Home = () => {
    return (
        <div className="main">
            <div className="back">
                <span className="intro">
                    <h1>An Easy Medicine Assistant</h1><br />
                    <p>This is a platform where you can get to know about your future appointments  with the doctor. </p><br />
                    <p>Here you can also get a detailed information about the prescribed
                        medicine.  </p><br />
                    <p>The most important thing is that your assistant reminds you with your medicine intake time as per your doctors prescription.</p><br />
                <div>
                    <button className="exploreBtn">Explore More </button>
                </div>
                </span>
                <span>
                    <img className="ai" src="https://nlaic.com/wp-content/uploads/2021/06/AI-for-Health.jpg" alt="" />
                </span>
            </div>
        <div className="explore">
        <p>To begin with following steps</p><br /> 
        <div className="steps">
            <div className="step-container">
                <div className="step">Step-1 <br />Medicine Details</div>
                <div className="step desc"></div>
            </div>
            <div className="step-container">
                <div className="step">Step-2 <br />Schedules</div>
                <div className="step desc"></div>
            </div>
            <div className="step-container">
                <div className="step">Step-3 <br />voice customization</div>
                <div className="step desc"></div>
            </div>
        </div>
    </div>
    </div>
    );
}

export default Home;