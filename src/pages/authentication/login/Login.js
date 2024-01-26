import React from 'react';
import './loginmain.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div class="body">
      <div class="wrapper">
        <h1>
          Login
        </h1>
        <form action=''>
          <div class="inputbox">
            <input type='text' placeholder='  Username' required></input>
            <i class="  fa fa-user-circle  logicon" aria-hidden="true"></i>

          </div>
          <div class="inputbox">
            <input type ="password" placeholder='  password' required></input>
            <i class="fa fa-lock logicon " aria-hidden="true"></i>

          </div>
          <button class="loginbutton" type='submit'> Login</button>
          <p>
            don't have account?<Link to="/reg">sign up
          </Link></p>
        </form>
      </div>
    </div>
  );
}
