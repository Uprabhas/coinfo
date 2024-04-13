import React, { useEffect } from "react";
import { useState } from "react";
import "./home.css";
import { api_coinlist_url, api_options } from "../../services/Apiservice";
import Coincard from "../Coinmodel/Coincard/Coincard";

export default function Home() {
  const [cryptoData, setcryptoData] = useState([]);
 
  const getdata = async () => {
    const res = await fetch(api_coinlist_url, {
      options: api_options,
    });
    const data = await res.json();
    setcryptoData(data.data.coins);
    console.log(data.data.coins);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="container header">
      {/* header */}
      <div className="">
        <div className="row">
          <div className="col-md-6">
            <h2 className="title"> Cryptocurrency prices and signals</h2>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
      <hr />
      {/* header section */}
      <div className="coin-header row m-2 ml-2">
        <div className="col-md-2">
          <label>coin ranks</label>
        </div>
        <div className="col-md-2">
          <label>icon</label>
        </div>
        <div className="col-md-4 text-center">
          <label>price</label>
        </div>
        <div className="col-md-4 text-center">
          <label>marketCap</label>
        </div>
        {/* <div className="col-md-2">
          <label>24</label>
        </div> */}
      </div>
      {cryptoData &&<Coincard data={cryptoData}/>}
    </div>
  );
}
