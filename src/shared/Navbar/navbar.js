import React from 'react'
import './navbar.css';

export default function Navbar() {
  return (
    <div>
      <div class="topnavbar">
        <a class="active"><i class="fa fa-home"> Home</i></a>
        <a class="split"><i class="fa fa-heart"></i> Watchlist</a>
        <a class="split "><i class ="fa fa-user"></i> Profile</a>
        <input type='text' placeholder='Search... Madcoin'></input>

      
    </div>
    </div>
  )
}
