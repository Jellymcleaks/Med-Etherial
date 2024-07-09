import { useState } from "react";
import "./Schedules.css"
const Details=()=>{
    let [open,close]=useState(false);
    return(
        <div>
        <div className="img">
            <iframe src="https://alarm-clock-react.netlify.app/" frameborder="0"></iframe>
            <span className="medi_info">
                <h1>Medicine Name</h1>
                <div className="doc_info">
                    <p>Doctor name : </p>
                    <p>Contact number : </p>   
                </div>
            </span>
            <span className="medi_img">
                <h1>Medicine image</h1>
            </span>
        </div>
        <button className="edit" onClick={()=>close(!open)} >Edit ^ </button>

        <div className={`sign_up_back ${ open? 'sign_show' : ''} ` }>
          <div className={`Sign_page ${open ? 'Sign_show' : ''} ` }>
          <span className='sign' onClick={()=>close(false)}>&times;</span>
            {/* code here */}
          </div>
      </div>
    </div>

    );
}
export default Details;