import React, { useEffect } from "react";
import "./home.css";
import { api_coinlist_url ,api_options} from "../../services/Apiservice";

export default function Home() {

const getdata =async()=>{
  const res=await fetch(api_coinlist_url, {
    options:api_options
  }
  );
const data=await res.json()
console.log(data)
}

useEffect(() => {
  getdata();
}, [])

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
      {/* section */}
      <section className="m-2">
        <div className=" main">
          {/* coin-view */}
          <div className="row">
            <div className="col-md-12">
              <p className="coin m-2" onClick={getdata}>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    class="bi bi-currency-bitcoin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927z" />
                  </svg>
                </span>
                <label className="mt-2">Bitcoin</label>
              </p>
            </div>
          </div>
        </div>
        <hr/>
      </section>
    </div>
  );
}
