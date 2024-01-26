import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <div class="topnavbar" >
        <a className="titlename">
          <label for="" style={{ color: "white", cursor: "pointer;" }}>
            Coin
          </label>
          <label style={{ color: "red", cursor: " pointer" }} for="">
            fo
          </label>
        </a>
        <Link class="active" to="/">
          <i  class="  flex flex-justify flex-item fa fa-home"> Home</i>
        </Link>        
        <Link class="split" to="/login">
          <i class="fa fa-user"></i> Log In
        </Link>
        <Link class="split" to="/watchlist">
          <i class="fa fa-heart"></i> Watchlist
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
