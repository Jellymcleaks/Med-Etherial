import SignInForm from './SignInForm';
import './Navbar.css';
import { useState } from 'react';
import "./SignInForm.css"
import Signup from './Signup';
// import logo from './medicare_logo.png'; 

const Navbar = () => {
  let [signup,setsignup]=useState(false);
  let [signin,setsignin]=useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img /*src={logo}*/ alt="Medicare Logo" />
        <p>Medi Care</p>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>|</li>
        <li>
          <a href="/schedule/med-time">Schedule </a>
        </li>
      </ul>
      <div className="navbar-signup">
        <button onClick={()=>setsignup(!signup)}>Sign-Up</button>
        <button onClick={()=>setsignin(!signin)}>Log-In</button>
      </div>
      <div className={`sign_in_back ${signin ? 'sign_in_show' : ''} ` }>
          <div className={`Sign_in_page ${signin ? 'Sign_in_show' : ''} ` }>
          <span className='sign_in' onClick={()=>setsignin(false)}>&times;</span>
            <SignInForm/>
            {/* <Signup/> */}
          </div>
      </div>
      <div className={`sign_up_back ${signup ? 'sign_show' : ''} ` }>
          <div className={`Sign_page ${signup ? 'Sign_show' : ''} ` }>
          <span className='sign' onClick={()=>setsignup(false)}>&times;</span>
            {/* <SignInForm/> */}
            <Signup/>
          </div>
      </div>
      </nav> 
  );
}

export default Navbar;
