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
        <Link class="active" to="/"><i class="fa fa-home"> Home</i></Link>
        <Link class="split " to="/login">
          <i class="fa fa-user"></i> Log In
        </Link>
        <a class="split">
          <i class="fa fa-heart"></i> Watchlist
        </a>
        <input type="text" placeholder="Search... Madcoin"></input>
      </div>
    </div>
  );
}
