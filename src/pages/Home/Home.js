import React, { useEffect } from "react";
import { useState } from "react";
import "./home.css";
import { api_coinlist_url, api_options } from "../../services/Apiservice";

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
        <div className="col-md-3">
          <label>price</label>
        </div>
        <div className="col-md-3">
          <label>marketCap</label>
        </div>
        <div className="col-md-2">
          <label>24</label>
        </div>
      </div>
      {/* section */}
      {cryptoData.map((item, index) => (
        <section className="box m-2" key={index}>
          <div className=" main ">
            {/* coin-view */}
            <div className="row">
              <div className="col-md-1 common">{item?.rank}</div>
              <div className="col-md-3 common">
                <p className="coin m-2">
                  <span className="icon">
                    <img class="report" src={item?.iconUrl} />
                  </span>
                </p>
                <div>
                  <label className="">{item?.name}</label>
                </div>
                <label className="">{item?.symbol}</label>
              </div>
              <div className="col-md-3 common">₹{item?.marketCap}</div>
              <div className="col-md-3 common">₹{item?.price}</div>
              <div className="col-md-2 common"></div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
