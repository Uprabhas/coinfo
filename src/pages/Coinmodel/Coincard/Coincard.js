import React from 'react'
import { Link } from 'react-router-dom'
import Coindetail from '../coin-detail/Coindetail'

export default function Coincard({data}) {
    // const api_data = data
  return (
    <div>
         {data.map((item, index) => (
        <section className="box m-2" key={index} >
          <Link to={`/:${item.uuid}`}>
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
          </Link>
        </section>
      ))}
    </div>
  )
}
