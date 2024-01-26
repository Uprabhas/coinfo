import React from 'react';
import './loginmain.css';

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
            <i class="  fa fa-lock logicon " aria-hidden="true"></i>

          </div>
          <button class="loginbutton" type='submit'> Login</button>
          <p>
            don't have account?<a href='#'>sign up
          </a></p>
        </form>
      </div>
    </div>
  );
}
