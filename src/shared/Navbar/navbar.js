import React from "react";
import "./navbar.css";

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
        {/* <a class="active"><i class="fa fa-home"> Home</i></a> */}
        <a class="split ">
          <i class="fa fa-user"></i> Profile
        </a>
        <a class="split">
          <i class="fa fa-heart"></i> Watchlist
        </a>
        <input type="text" placeholder="Search... Madcoin"></input>
      </div>
    </div>
  );
}
