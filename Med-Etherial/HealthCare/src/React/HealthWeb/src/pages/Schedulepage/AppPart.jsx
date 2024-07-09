import React, { useState } from 'react'

function AppPart() {
  let [open,close]=useState(false);
  return (
    <div>
        <div className='img'>
            <div className='appointSchedule'>
              <h1>Information about the schedule </h1>
            </div>
        </div>
            <button className='edit' onClick={()=>close(!open)}>edit</button>
        <div className={`sign_up_back ${ open? 'sign_show' : ''} ` }>
          <div className={`Sign_page ${open ? 'Sign_show' : ''} ` }>
          <span className='sign' onClick={()=>close(false)}>&times;</span>
          {/* code here */}     
          </div>
        </div>
    </div>
  )
}

export default AppPart;
