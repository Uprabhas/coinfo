import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <div class="topnavbar">
        <a className="titlename">
          <label for="" style={{ cursor: "pointer;" }}>
            Coin
          </label>
          <label style={{ color: "red", cursor: " pointer" }} for="">
            fo
          </label>
        </a>
        <Link class="active" to="/">
          <i class="fa fa-home"> Home</i>
        </Link>        
        <div className="animated-text">
          Fetch:<span></span>
        </div>
        <Link class="split" to="/login">
          <i class="fa fa-user"></i> Log In
        </Link>
        <Link class="split">
          <i class="fa fa-heart" to="/"></i> Watchlist
        </Link>
        <input type="text" placeholder="Search... Madcoin"></input>
      </div>

      {/* <div>
        <section class="min-height  flex background">
          <div class="topleft">
            <h1 class="main_text banner-text">
              Welcome to Coinfo where you find info about Crypto...
            </h1>
          </div>
          <div class="topright ">
            <img src="public\coinfo_main_section.png"></img>
          </div>
        </section>
      </div> */}

    </div>
    
  );
}
