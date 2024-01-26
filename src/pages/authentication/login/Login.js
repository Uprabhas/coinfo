import React from 'react';
import './loginmain.css';
import { FaCircleUser, FaLock } from "react-icons/fa6";

export default function Login() {
  return (
    <div class="body">
      <div class="wrapper">
        <h1>
          Login
        </h1>
        <form action=''>
          <div className="inputbox">
            <input type='text' placeholder='  Username' required/>
            <FaCircleUser className='icon'/>
          </div>
          <div className="inputbox">
            <input type ="password" placeholder='  password '  required  />
            <FaLock className='icon' />

          </div>
          <button class="loginbutton" type='submit'> Login</button>
          <span className='signup'><p>
            don't have account?<a href='#'>sign up
          </a></p></span>
        </form>

      </div>
    </div> 


    

  )
}
